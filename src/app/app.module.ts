import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMovieFlexComponent } from './home-movie-flex/home-movie-flex.component';
import { MyListCardComponent } from './content/my-list/my-list-card.component';
import { NewReleaseComponent } from './tiles/new-release/new-release.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieShowInitializerService } from './shared/service/movie-show-initializer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowseDetailComponent } from './content/browse-detail/browse-detail.component';
import { MoviesComponent } from './content/movies/movies.component';
import { TvShowsComponent } from './content/tv-shows/tv-shows.component';
import { UpcomingMovieComponent } from './tiles/upcoming-movie/upcoming-movie.component';
import { LoginSignUpComponent } from './shared/login-sign-up/login-sign-up.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { UserReviewComponent } from './user-review/user-review.component';
import { TrendingNowComponent } from './tiles/trending/trending-now.component';
import { ToastrModule } from 'ngx-toastr';
import { CardsComponent } from './tiles/tile.component';
import { TopRatedComponent } from './tiles/top-rated/top-rated.component';
import { TvShowsCardComponent } from './tiles/tv-shows/tv-shows-card.component';
import { WatchedComponent } from './tiles/watched/watched.component';

export function httptranslateloader(http: HttpClient){
 return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeMovieFlexComponent,
    CardsComponent,
    MyListCardComponent,
    NewReleaseComponent,
    TopRatedComponent,
    TvShowsCardComponent,
    TvShowsComponent,
    HeaderComponent,
    BrowseDetailComponent,
    WatchedComponent,
    MoviesComponent,
    TrendingNowComponent,
    UpcomingMovieComponent,
    LoginSignUpComponent,
    UserReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
         provide: TranslateLoader,
         useFactory: httptranslateloader,
         deps: [HttpClient]
         }
      }),
  ],
  providers: [MovieShowInitializerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
