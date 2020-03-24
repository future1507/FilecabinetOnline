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
  NewPasssword;
  OldPassword;

  firstname2;
  lastname2;
  gender2;
  constructor(private acrouter : ActivatedRoute,private http: HttpClient
    ,private data : DatapassService,private router : Router) { 
    //this.Userid = acrouter.snapshot.params['Userid'];
    this.Email = data.Email;
    this.Userid = data.Userid;
    this.Password = data.Password;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.gender = data.gender;
    console.log(this.Userid);
  }

  async ngOnInit(){
    /*this.profile = await this.ShowProfile();
    console.log(this.profile);*/
  }
  async EditProfile(){
    this.data.firstname = this.firstname;
    this.data.lastname = this.lastname;
    this.data.gender = this.gender;

    let json = { firstname : this.firstname,
                 lastname : this.lastname,
                 gender : this.gender,
                 Userid : this.Userid};
    let response = await this.http
    .post(this.data.ip+'/webservice/editprofile', JSON.stringify(json)).toPromise();
    return response;
  }

  async ChangePassword(){
    this.data.Password = this.NewPasssword;
    let json = { Email : this.Email,
      Oldpassword : this.OldPassword,
      Newpassword : this.NewPasssword};
    console.log(json);
    let response = await this.http
    .post(this.data.ip+'/webservice/changepassword', JSON.stringify(json)).toPromise();
    console.log(response);
    return response;
  }


}
