import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import the  Components /////////////////////////

import { HomePageComponent } from './pages/home-page/home-page.component';
import { FullComponent } from './layout/full.component';
import { SingleMovieComponent } from './pages/single-movie/single-movie.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        children: [
        ]
      },
      {
        path: 'movie/:movie_id',
        component: SingleMovieComponent,
        children: [
        ]
      },
      {
        path: 'search/:keyword',
        component: SearchResultsComponent,
        children: [
        ]
      },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }