import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-list-card',
  templateUrl: './my-list-card.component.html',
  styleUrls: ['./my-list-card.component.scss']
})
export class MyListCardComponent implements OnInit {
  public markedFavorite : any;
  public myWatchLaterData : any;
  public myWatchedData : any;

  public Image_Url: string="https://image.tmdb.org/t/p/w500";


  constructor(private router: Router) { }

    ngOnInit(): void {
      debugger
      this.markedFavorite=  JSON.parse(localStorage.getItem('favorite'));
      this.myWatchLaterData=  JSON.parse(localStorage.getItem('watcheLater'));
      this.myWatchedData=  JSON.parse(localStorage.getItem('watched'));

    }
  public browseContentDetail(id:any):any{
  this.router.navigate(['/browseDetail/' + id])
  }

}
