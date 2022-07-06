import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieShowInitializerService } from 'src/app/shared/service/movie-show-initializer.service';

@Component({
  selector: 'app-trending-now',
  templateUrl: './trending-now.component.html',
  styleUrls: ['./trending-now.component.scss'],
})
export class TrendingNowComponent implements OnInit {
  public MovieData: any;
  public resultData: any = [];
  public Image_Url: string = 'https://image.tmdb.org/t/p/w500';
  public movieType: string = 'popularity.desc';
  public loading:boolean=false;

  constructor(
    private content: MovieShowInitializerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading=true;
    this.content.getMovieList(this.movieType).subscribe((data: any) => {
      this.resultData = data.results.filter((x) => x.backdrop_path != null);
    this.loading=false;
  });
  }
  public browseContentDetail(id: any): any {
    this.router.navigate(['/browseDetail/' + id]);
  }
}
