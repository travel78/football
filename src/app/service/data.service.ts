import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  private country: Subject<any> = new Subject<any>();

  public pushCountry(countryId: String) {
    this.country.next(countryId);
  }

  public getCountry() {
    return this.country;
  }
}
