import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email;
  Password;
  Userid;
  constructor(private http: HttpClient,private router : Router) { }

  /*async*/ ngOnInit(): void {
    /*let response = await this.getUser();
    console.log(response);
    this.id = response['Userid'];
    console.log(this.id);*/
  }
  /*async getUser(){
    let response = this.http
      .get('http://localhost:80/webservice/'+this.Email).toPromise();
    return response;
  }*/
  Signup(){
      this.router.navigateByUrl('/signup');
  }
  Login(){
    console.log(this.Email);
    console.log(this.Password);
    let json = { Email : this.Email
            , Password : this.Password};
    this.http.post('http://localhost:80/webservice/login' , JSON.stringify(json))
        .subscribe(response =>{
            console.log(response);
            this.Userid = response[0].Userid;
            console.log(this.Userid);
            if (response != false) {
              console.log('Login OK');
              this.router.navigateByUrl('/home/'+this.Userid);
            }
            else{
              console.log('Login Fail');
            }
        }, error => {
          console.log('Fail');
        });
  }
  
}
