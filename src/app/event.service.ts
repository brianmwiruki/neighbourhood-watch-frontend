import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventUrl = "https://neighbourhood-watch-backend.herokuapp.com/admin/neighbourhoodapp/post/1";
  private _specialUrl = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventUrl)
  }

   getSpecial(){
    return this.http.get<any>(this._specialUrl)
  }
}
