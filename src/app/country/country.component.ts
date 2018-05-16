import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public countries;
  public currentCountry;

  constructor(private http: HttpService, private dataService: DataService) {
  }

  ngOnInit() {
    this.http.getCountries().subscribe(
      data => {
        this.countries = data;
      }
    );

    this.dataService.getCountry().subscribe(
      id => {
        this.currentCountry = this.countries[id];
      }
    );
  }

}
