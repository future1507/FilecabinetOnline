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
  
    
    Names = [];
    Filecabinetids = [];
    Userids = [];
  constructor(private acrouter : ActivatedRoute,private http: HttpClient
    ,private router : Router,private data : DatapassService) {
    this.Userid = acrouter.snapshot.params['Userid'];
    //console.log("ip="+this.data.ip);
    this.ShowFilecabinet();
    
   }

   async ngOnInit(){
    /*this.allfilecabinet = await this.ShowFilecabinet();
    console.log(this.allfilecabinet);*/

    /*for(let filecabinet of this.allfilecabinet){
      this.Names.push(filecabinet.Name);
      this.Filecabinetids.push(filecabinet.Filecabinetid);
      this.Userids.push(filecabinet.Userid);
    }*/

    //console.log.(this.Names[0]);
    /*for (let index = 0; index < this.Names.length; index++) {
      console.log.(this.Names[index]);
    }*/
    
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
    
    newFilecabinet = false;

    async NewFilecabinet(){
        this.newFilecabinet = true;
        console.log(this.NewFilecabinetName);
        console.log(this.Userid);
        let json = { Name : this.NewFilecabinetName
                 , Userid : this.Userid};
        console.log(json);         
        let response = await this.http
          .post(this.data.ip+'/webservice/newfilecabinet', JSON.stringify(json)).toPromise();
        console.log(response);

        this.ShowFilecabinet();
    }

    async ShowFilecabinet(){
        this.allfilecabinet = undefined;
        let response = await this.http
          .get(this.data.ip+'/webservice/showfilecabinet/'+this.Userid).toPromise();
        console.log(response);
        this.allfilecabinet = response;
        return response;
    }

    GotoFilecabinet(filecabinet){
        console.log(filecabinet);
        this.router.navigateByUrl('/filecabinet/'+filecabinet);
    }

}
