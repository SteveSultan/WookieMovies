import { Component, HostListener, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }
  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (number > 100) {
  //    
  //   } else if (number > 500) {
  //    
  //   }

  // }
}
