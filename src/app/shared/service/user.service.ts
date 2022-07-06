import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isPrimeMember$ = new BehaviorSubject(false);
  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private httpClient: HttpClient) { }

  public getPolicies(){
       return this.httpClient.get(this.SERVER_URL + 'policies');
  }
}
