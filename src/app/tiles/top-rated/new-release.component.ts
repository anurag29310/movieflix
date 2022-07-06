import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieShowInitializerService } from 'app/shared/service/movie-show-initializer.service';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.scss'],
})
export class NewReleaseComponent implements OnInit {
  public MovieData: any;
  public resultData: any = [];
  public Image_Url: string = 'https://image.tmdb.org/t/p/w500';
  public movieType: string = 'popularity.desc';
  public movieTypeArray: Array<string> = [
    '/movie/top_rated',
    '/movie/upcoming',
    '/movie/now_playing',
  ];

  constructor(
    private content: MovieShowInitializerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    debugger;
    // this.movieTypeArray.forEach((movieType) => {
      this.content.getLatestMovieList().subscribe((data: any) => {
        this.resultData = data.results.filter(x=>x.backdrop_path!=null);
      });
    // });
  }
  public browseContentDetail(id: any): any {
    this.router.navigate(['/browseDetail/' + id]);
  }
}
