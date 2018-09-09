import { Injectable } from '@angular/core';
import { Marathon } from './marathon';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarathonsService {
  private JSONUrl: string = "http://backend.worldofmarathon.com/api/v1/marathons/get_marathons";

  constructor(private http: HttpClient) {}

  getMarathons(): Observable<Marathon[]> {
    let params = new HttpParams();
    return this.http.get<Marathon[]>(this.JSONUrl)
  }
  getMarathon(id:number){
    return this.http.get<Marathon>(this.JSONUrl)
  }

}
