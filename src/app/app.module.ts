import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FullComponent } from './layout/full.component';
import { HeaderComponent } from './layout/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SingleMovieComponent } from './pages/single-movie/single-movie.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FullComponent,
    HeaderComponent,
    CarouselComponent,
    SingleMovieComponent,
    NavbarComponent,
    SearchResultsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    CarouselModule,
    RatingModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
