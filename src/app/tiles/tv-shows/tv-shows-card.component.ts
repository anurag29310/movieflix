import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieShowInitializerService } from 'app/shared/service/movie-show-initializer.service';

@Component({
  selector: 'app-tv-shows-card',
  templateUrl: './tv-shows-card.component.html',
  styleUrls: ['./tv-shows-card.component.scss'],
})
export class TvShowsCardComponent implements OnInit {
  public MovieData: any;
  public resultData: any = [];
  public Image_Url: string = 'https://image.tmdb.org/t/p/w500';
  public showType: string = 'popularity.desc';
  public showTranding: string = 'day';
  public resultTrandingData: any = [];

  constructor(
    private content: MovieShowInitializerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.content.getTVShowList(this.showType).subscribe((data: any) => {
      this.resultData = data.results.filter((x) => x.backdrop_path != null);
    });
    this.content
      .getTrendingTVShowList(this.showTranding)
      .subscribe((data: any) => {
        this.resultTrandingData = data.results.filter(
          (x) => x.backdrop_path != null
        );
      });
  }
  public browseContentDetail(id: any): any {
    this.router.navigate(['/browseDetail/' + id]);
  }
}
