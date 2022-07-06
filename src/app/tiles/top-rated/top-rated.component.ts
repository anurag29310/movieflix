import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieShowInitializerService } from 'src/app/shared/service/movie-show-initializer.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent implements OnInit {
  public MovieData: any;
  public resultData: any = [];
  public Image_Url: string = 'https://image.tmdb.org/t/p/w500';
  public movieType: string = 'vote_count.asc';
  public loading:boolean=false;

  constructor(
    private content: MovieShowInitializerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading=true;
    this.content.getTopRatedMovieList().subscribe((data: any) => {
      this.resultData = data.results.filter((x) => x.backdrop_path != null);
      this.loading=false
    });
  }
  public browseContentDetail(id: any): any {
    this.router.navigate(['/browseDetail/' + id]);
  }
}
