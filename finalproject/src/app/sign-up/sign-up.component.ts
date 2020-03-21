import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Userid;
  Email;
  Password;
  firstname;
  lastname;
  gender;
  constructor(private http: HttpClient,private router : Router) { }

  ngOnInit(): void {
  }
  async Signup(){
    console.log(this.Userid);
    console.log(this.Email);
    console.log(this.Password);
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.gender);

    let json = { Userid : this.Userid
            , Email : this.Email
            , Password : this.Password
            , firstname : this.firstname
            , lastname : this.lastname
            , gender : this.gender};
            let response = await this.http
            .post('http://localhost:80/webservice/signup', JSON.stringify(json)).toPromise();
          this.router.navigateByUrl('/login');
          return response
  }

}
