import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const API_URL = 'http://api.timezonedb.com/v2.1/get-time-zone?key=HTTPS93PTTDZ&format=json&by=position';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  constructor(private http:HttpClient) {}
  
  getTimeZone(lat: any, lang: any) {
	  console.log('lat: ' + lat);
	  return this.http.get(API_URL + '&lat='+lat+'&lng='+lang);
    }
}
