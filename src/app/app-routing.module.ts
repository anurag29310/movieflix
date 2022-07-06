import { LoginSignUpComponent } from './shared/login-sign-up/login-sign-up.component';

import { MoviesComponent } from './content/movies/movies.component';
import { BrowseDetailComponent } from './content/browse-detail/browse-detail.component';
import { HomeMovieFlexComponent } from './home-movie-flex/home-movie-flex.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsComponent } from './content/tv-shows/tv-shows.component';
import { MyListCardComponent } from './content/my-list/my-list-card.component';

const routes: Routes = [
  {path:"browseDetail/:recordId", component: BrowseDetailComponent},
  {path:"movies", component: MoviesComponent},
  {path:"tvshows", component: TvShowsComponent},
  {path:"mylistCard", component: MyListCardComponent},
  {path:"loginSignUp", component: LoginSignUpComponent},
  {path:"**", component: HomeMovieFlexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
