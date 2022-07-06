import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieShowInitializerService } from 'app/shared/service/movie-show-initializer.service';

@Component({
  selector: 'app-upcoming-movie',
  templateUrl: './upcoming-movie.component.html',
  styleUrls: ['./upcoming-movie.component.scss'],
})
export class UpcomingMovieComponent implements OnInit {
  public MovieData: any;
  public resultData: any = [];
  public Image_Url: string = 'https://image.tmdb.org/t/p/w500';
  public movieType: string = 'upcoming';

  constructor(
    private content: MovieShowInitializerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.content.getMovieList(this.movieType).subscribe((data: any) => {
      this.resultData = data.results.filter((x) => x.backdrop_path != null);
    });
  }
  public browseContentDetail(id: any): any {
    this.router.navigate(['/browseDetail/' + id]);
  }
}
