import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WookieService } from 'src/app/services/Wookie.service';
import { Movie } from '../../interfaces/MoviesInterface'

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  Movie!: Movie;
  MovieID!: any;
  pipe = new DatePipe('en-US');
  FormattedDate:any
  constructor(private _WookieService: WookieService, private http: HttpClient, private _Activatedroute: ActivatedRoute) { }
  getSingleMovie() {
    this._WookieService.getSingleMovie(this.MovieID).subscribe(data => {
      this.Movie = data
      this.FormattedDate = this.pipe.transform(data.released_on,'dd-MM-yyyy', 'short');
    })

  }
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.MovieID = params.get('movie_id');
    });
    this.getSingleMovie()
  }

}
