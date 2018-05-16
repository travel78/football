import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { CountryComponent } from './country/country.component';
import { HttpService } from './service/http.service';
import { DataService } from './service/data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
