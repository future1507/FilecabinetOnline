import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatapassService {
  Userid;
  Email;
  Password;
  firstname;
  lastname;
  gender;
  mystatus;

  ip = "http://localhost:80";
  //localhost80 = "http://localhost:80";

  User = [{Userid : this.Userid,
          Email : this.Email,
          Password : this.Password,
          firstname : this.firstname,
          lastname : this.lastname,
          gender : this.gender}]
  constructor() {
       
   }
   
}
