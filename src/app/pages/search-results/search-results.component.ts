import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {WookieService} from '../../services/Wookie.service'
import {Movie} from '../../interfaces/MoviesInterface'
import { ActivatedRoute, Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  keyword:any;
  movies:Array<Movie>=[];
  constructor(private _WookieService: WookieService, private http: HttpClient, private _Activatedroute: ActivatedRoute,private shareDataService: ShareDataService) { }
  getMoviesList() {
    this._WookieService.getMoviesList(this.keyword).subscribe(data => {
      this.movies=data.movies
    })
    
  }
  ngOnInit(): void {
    
    this._Activatedroute.paramMap.subscribe(params => {
      this.keyword = params.get('keyword');
    });
   
      console.log(this.shareDataService.keyword.getValue())
    this.getMoviesList()
  }
  }


