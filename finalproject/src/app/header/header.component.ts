import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Userid;
  constructor(private http: HttpClient,private router : Router) {
    this.Userid = HomeComponent.prototype.Userid;
  }
  ngOnInit(): void {
  }
  Profile(){
      console.log(this.Userid);
      this.router.navigateByUrl('/profile/'+this.Userid);
    }
  Home(){
    this.router.navigateByUrl('/home/'+this.Userid);
  }
  // cabinet(){
  //   this.router.navigateByUrl('/cabinet');
  // }
  // document(){
  //   this.router.navigateByUrl('/document()');
  // }
  

}
