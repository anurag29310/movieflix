import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieShowInitializerService } from '../../shared/service/movie-show-initializer.service';
import { UserService } from '../../shared/service/user.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'app/shared/service/notification.service';

@Component({
  selector: 'app-browse-detail',
  templateUrl: './browse-detail.component.html',
  styleUrls: ['./browse-detail.component.scss'],
})
export class BrowseDetailComponent implements OnInit {
  public moviesDetail: any;
  public Image_Url: string = 'https://image.tmdb.org/t/p/w500';
  public isFavorite: boolean = false;
  public isWatchedLater: boolean = false;
  public loading:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private content: MovieShowInitializerService,
    public userService: UserService,
    private modalService: NgbModal,
    private notifyService : NotificationService
  ) {}

  ngOnInit(): void {
    this.loading=true;
    this.route.params.subscribe((id: any) => {
      this.content.getMovieDetailByid(id.recordId).subscribe(
        (record) => {
        this.moviesDetail = record;
        this.setFavoriteWatched();
        this.loading=false;
      },
      error => {
        this.loading=false;
        this.notifyService.showError("Something Went Wrong", "Error")
      },
      );
    });

  }

  public setFavoriteWatched() {
    const favoriteMovieShow = JSON.parse(localStorage.getItem('favorite'))|| [];;
    const MarkShow = favoriteMovieShow.filter(
      (movieShow) => movieShow.id == this.moviesDetail.id
    );
    if (MarkShow.length != 0) {
      this.isFavorite = true;
    }
    const WatchedLater = JSON.parse(localStorage.getItem('watcheLater')) || [];;
    const MarkMovieShow = WatchedLater.filter(
      (movieShow) => movieShow.id == this.moviesDetail.id
    );
    if (MarkMovieShow.length != 0) {
      this.isWatchedLater = true;
    }
  }

  public addUpdateToFavorite(myList: any): any {
    const myListLocalStorage =
      JSON.parse(localStorage.getItem('favorite')) || [];
    const filter = myListLocalStorage?.filter((x) => x.id == myList.id);
    if (!filter || filter?.length == 0) {
      this.isFavorite = true;
      myListLocalStorage.push(myList);
      localStorage.setItem('favorite', JSON.stringify(myListLocalStorage));
    } else {
      const updatedFavorite = myListLocalStorage?.filter(
        (x) => x.id != myList.id
      );
      this.isFavorite = false;
      localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
    }
  }

  public addUpdateWatcheLater(myList: any): any {
    const myListLocalStorage =
      JSON.parse(localStorage.getItem('watcheLater')) || [];
    const filter = myListLocalStorage?.filter((x) => x.id == myList.id);
    if (!filter || filter?.length == 0) {
      this.isWatchedLater = true;
      myListLocalStorage.push(myList);
      localStorage.setItem('watcheLater', JSON.stringify(myListLocalStorage));
    } else {
      const updatedWatch = myListLocalStorage?.filter((x) => x.id != myList.id);
      this.isWatchedLater = false;
      localStorage.setItem('watcheLater', JSON.stringify(updatedWatch));
    }
  }

  public manageWatched(myList: any): any {
    const myListLocalStorage =
      JSON.parse(localStorage.getItem('watched')) || [];
    const filter = myListLocalStorage?.filter((x) => x.id == myList.id);
    if (!filter || filter?.length == 0) {
      this.isWatchedLater = true;
      myListLocalStorage.push(myList);
      localStorage.setItem('watched', JSON.stringify(myListLocalStorage));
    } else {
      const updatedWatch = myListLocalStorage?.filter((x) => x.id != myList.id);
      this.isWatchedLater = false;
      localStorage.setItem('watched', JSON.stringify(updatedWatch));
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'review-title' })
      .result.then((result) => {});
  }
}
