import { Injectable } from '@angular/core';    
import { HttpClient } from "@angular/common/http";    
import { BehaviorSubject } from 'rxjs';    
@Injectable({    
  providedIn: 'root'    
})    
export class ShareDataService {    
  word: any='';    
  public keyword = new BehaviorSubject<any>(this.word);    
  public share = this.keyword.asObservable();    
     
  constructor(private http: HttpClient) { }    
  // getLatestValue(data: never[]) {     
  //   this.keyword.next(data);       
  // }    
   
    
}  