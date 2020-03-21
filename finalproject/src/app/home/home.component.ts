import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    Userid;
    NewFilecabinetName;
    allfilecabinet;
    //FilecabinetName;     
  constructor(private acrouter : ActivatedRoute,private http: HttpClient
    ,private router : Router,private data : DatapassService) {
    this.Userid = acrouter.snapshot.params['Userid'];
   }

   async ngOnInit(){
    this.allfilecabinet = await this.ShowFilecabinet();
    console.log(this.allfilecabinet);
    /*let newfilecabinet = await this.NewFilecabinet();
    console.log(newfilecabinet);*/
  }

  displayModal: boolean;

    displayBasic: boolean;

    displayBasic2: boolean;

    displayMaximizable: boolean;

    displayPosition: boolean;

    position: string;

    showModalDialog() {
        this.displayModal = true;
    }

    showBasicDialog() {
        this.displayBasic = true;
    }

    showBasicDialog2() {
        this.displayBasic2 = true;
    }
    
    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

    showPositionDialog(position: string) {
        this.position = position;
        this.displayPosition = true;
    }
    
    async NewFilecabinet(){
        console.log(this.NewFilecabinetName);
        console.log(this.Userid);
        let json = { Name : this.NewFilecabinetName
                 , Userid : this.Userid};
        let response = await this.http
          .post('http://localhost:80/webservice/newfilecabinet', JSON.stringify(json)).toPromise();
        location.reload();
        return response;
    }

    ShowFilecabinet(){
        let response = this.http
          .get('http://localhost:80/webservice/showfilecabinet/'+this.Userid).toPromise();
        return response;
        
    }
}
