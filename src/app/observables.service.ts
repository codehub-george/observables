import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, timer, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  constructor(private http: HttpClient) { }

  getNames(): Observable<string[]> {
    return of(['John', 'Maria']);
  }

  /**
   * Emits every 1 sec
   */
  getInterval(): Observable<number> {
    return timer(1000, 1000);
  }

  getCustomers(): Observable<Customer> {
    return from([
      {name: 'John', surname: 'Pappas'},
      {name: 'John', surname: 'Pappas'},
      {name: 'John', surname: 'Pappas'},
      {name: 'George', surname: 'Oiko'},
      {name: 'Nick', surname: 'Gkalis'},
      {name: 'John', surname: 'Ioannou'}
    ]);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/');
  }
}


export interface Customer {
  name: string;
  surname: string;
}

export interface Country {
  name: string;
  topLevelDomain: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
}
