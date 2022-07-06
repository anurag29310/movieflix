import { Component, Input, OnInit } from '@angular/core';
import { UserReviews } from '../shared/model/user-review';


@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent implements OnInit {

  @Input()
public movieShowId: number;

today = new Date();
reviewDescription = '';

public userReview: UserReviews[];
public reviewsByMovieShowId : any;

  constructor() { }

  ngOnInit(): void {
    debugger
   this.userReview= JSON.parse(localStorage.getItem('Reviews')) || [];
   this.reviewsByMovieShowId=this.userReview.filter(movie=> movie.Reviewid==this.movieShowId)
  }

  public addReview() {
    const review: UserReviews = {
      Reviewid: this.movieShowId,
      Reviewer: 'User',
      Review: this.reviewDescription,
      Time: this.today,
    };
    this.userReview.push(review);
    this.reviewsByMovieShowId.push(review)
    this.reviewDescription="";
    localStorage.setItem("Reviews", JSON.stringify(this.userReview));
  }
}
