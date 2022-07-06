import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieShowInitializerService {
  private movie_Url: string = 'https://api.themoviedb.org/3';
  private dicoverMovie_Url: string = '/discover/movie';
  private dicoverTV_Url: string = '/discover/tv';

  private GetMovieByID_Url: string = 'https://api.themoviedb.org/3/movie/';
  private API_Key: string = '?api_key=746f8dbf5e99e78ab53b1b586f0a4b54';
  // private Image_Url: string="https://image.tmdb.org/t/p/w500";

  constructor(private http: HttpClient) {}

  public getMovieList(type: string) {
    return this.http.get<any>(
      this.movie_Url + this.dicoverMovie_Url + this.API_Key + '&sort_by=' + type
    );
  }
  public getTopRatedMovieList() {
    return this.http.get<any>(
      this.movie_Url + '/movie/top_rated' + this.API_Key
    );
  }
  public getUpcomingMovieList() {
    return this.http.get<any>(
      this.movie_Url + '/movie/upcoming' + this.API_Key
    );
  }
  public getLatestMovieList() {
    return this.http.get<any>(
      this.movie_Url + '/movie/now_playing' + this.API_Key
    );
  }
  public getMovieDetailByid(id: number) {
    return this.http.get<any>(this.GetMovieByID_Url + id + this.API_Key);
  }

  public getTVShowList(type: string) {
    return this.http.get<any>(
      this.movie_Url + this.dicoverTV_Url + this.API_Key + '&sort_by=' + type
    );
  }
  public getTrendingTVShowList(type: string) {
    return this.http.get<any>(
      this.movie_Url + this.dicoverTV_Url + this.API_Key + '&sort_by=' + type
    );
  }
}
