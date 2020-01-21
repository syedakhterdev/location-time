import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {
	
	country;dateTime;

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
		  
		 }
  
  getTime(myForm: NgForm){
	  if (myForm['lat'] && myForm['lang']) {
		  console.log(myForm['lat']);
		  console.log(myForm['lang']);
		  this.myService.getTimeZone(myForm['lat'], myForm['lang']).subscribe(
		  data => { 
			console.log(data);
			this.country = data['countryName'];
			this.dateTime = data['formatted'];
		  },
		  err => console.error(err),
		  () => console.log('done')
		  );
	  }
	  else console.log('nothing');
  }

}
