import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getCountries() {
    return this.http.get('/assets/country.json');
  }

  public getTeams() {
    return this.http.get<Array<any>>('/assets/team.json');
  }
}
