import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatapassService } from '../datapass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Userid;
  Email;
  Password;
  firstname;
  lastname;
  gender;
  constructor(private acrouter : ActivatedRoute,private http: HttpClient
    ,private data : DatapassService,private router : Router) { 
    //this.Userid = acrouter.snapshot.params['Userid'];
    this.Email = data.Email;
    this.Userid = data.Userid;
    this.Password = data.Password;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.gender = data.gender;
  }

  async ngOnInit(){
    /*this.profile = await this.ShowProfile();
    console.log(this.profile);*/
  }
  async EditProfile(){
    let json = { firstname : this.firstname,
                 lastname : this.lastname,
                 gender : this.gender,
                 Userid : this.Userid};
    let response = await this.http
    .post('http://localhost:80/webservice/editprofile', JSON.stringify(json)).toPromise();
    location.reload();
    return response;
  }



  /*async ShowProfile(){
    let response = this.http
          .get('http://localhost:80/webservice/showprofile/'+this.Userid).toPromise();
        return response;
  }*/

}
