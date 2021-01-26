import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private shareDataService:ShareDataService) { }
  Keyword: any;
  ngOnInit(): void {
  }
  OnEnter() {
    // this.shareDataService.keyword.next(this.Keyword);  
    window.location.href=`/search/${this.Keyword}`
  }
}
