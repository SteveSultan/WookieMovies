import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {WookieService} from '../../services/Wookie.service'
import {Movie} from '../../interfaces/MoviesInterface'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  ActionMoviesList: Array<Movie>=[];
  DramaMoviesList: Array<Movie>=[];
  AnimationMoviesList: Array<Movie>=[];
  CrimeMoviesList: Array<Movie>=[];
  AdventureMoviesList: Array<Movie>=[]
  constructor( private _WookieService:WookieService ,private http: HttpClient) { }


  getMoviesList() {
    this._WookieService.getMoviesList(null).subscribe(data => {
    
      for (let i=0;i<data.movies.length;i++){
        if(data.movies[i].genres.includes('Action')){
          this.ActionMoviesList.push(data.movies[i])
        }
         if(data.movies[i].genres.includes('Drama')){
          this.DramaMoviesList.push(data.movies[i])
        }
         if(data.movies[i].genres.includes("Animation")){
          this.AnimationMoviesList.push(data.movies[i])
        }
         if(data.movies[i].genres.includes('Crime')){
          this.CrimeMoviesList.push(data.movies[i])
        }
         if(data.movies[i].genres.includes('Adventure')){
          this.AdventureMoviesList.push(data.movies[i])
        }
      }

    })
    
  }
  ngOnInit(): void {
    this.getMoviesList()
  }

}
