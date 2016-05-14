import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ImdbService {
  private http;
  constructor(http: Http){
      this.http = http;
  }
  get() {
    // return this.http.get('src/app/assets/imdb.json')
    return this.http.get('http://localhost:4000/imdb')
    .map(response => response.json());
  }
}