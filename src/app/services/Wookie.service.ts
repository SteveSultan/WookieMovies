import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {environment} from '../../../src/environments/environment'
import {Movie} from '../interfaces/MoviesInterface'
@Injectable({
  providedIn: 'root'
})
export class WookieService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer Wookie2019'
    })
  }
  SearchKey: string='';

  constructor(private _http: HttpClient) { }


  getMoviesList(keyword:any) {
    if (keyword){
      this.SearchKey='?q='+keyword
    }
    else{
      this.SearchKey=''
    }
    return this._http.get<Array<Movie>>(environment.moviesUrl+this.SearchKey ,this.httpOptions).pipe(map((res: any) => res))
  }
  getSingleMovie(id: string) {
    return this._http.get<Array<Movie>>(environment.moviesUrl+'/'+id ,this.httpOptions).pipe(map((res: any) => res))
  }

}
