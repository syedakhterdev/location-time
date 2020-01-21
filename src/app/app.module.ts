import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeZoneComponent } from './time-zone/time-zone.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'getTime', component: TimeZoneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimeZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	RouterModule.forRoot(routes),
	FormsModule,
	HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
