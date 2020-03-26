import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { DatapassService } from '../datapass.service';


@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  dates : SelectItem[];
  months : SelectItem[];
  years : SelectItem[];
  date: string;
  month : string;
  year : string;

  searches : SelectItem[];
  search : string;

  Documentid;
  Filecabinetid;
  DocName;
  Source;
  Sendto;
  Referto;

  alleligibility;
  mystatus;
  Userid;
  FilecabinetName;

  alldocument;
  maxdocid : number;

  constructor(private http: HttpClient,private router : Router
    ,private acrouter : ActivatedRoute,private data : DatapassService) {

      this.Filecabinetid = acrouter.snapshot.params['Filecabinetid'];
      this.Userid = data.Userid;
      console.log(data.Userid);
      this.ShowEligibility();
      this.ShowDocument();
      /*let test=[];
      console.log("test = ",test.);*/

      this.dates = [];
        for (let i = 1; i <= 31; i++) {
            this.dates.push({label:''+  i, value: i});
        }
      this.months = [
            {label: 'มกราคม',value: 1},
            {label: 'กุมภาพันธ์ ',value: 2},
            {label: 'มีนาคม ',value: 3},
            {label: 'เมษายน ',value: 4},
            {label: 'พฤษภาคม ',value: 5},
            {label: 'มิถุนายน ',value: 6},
            {label: 'กรกฎาคม ',value: 7},
            {label: 'สิงหาคม ',value: 8},
            {label: 'กันยายน ',value: 9},
            {label: 'ตุลาคม ',value: 10},
            {label: 'พฤศจิกายน ',value: 11},
            {label: 'ธันวาคม ',value: 12}
      ];
      this.years=[];
        for (let i = 2500; i <= 2563; i++) {
          this.years.push({label:''+ i, value: i});
      } 

      this.searches = [
        {label: 'เลขเอกสาร',value: "Documentid"},
        {label: 'ชื่อเรื่อง ',value: "Name"},
        {label: 'ที่มาของเอกสาร ',value: "Source"},
        {label: 'ส่งถึง ',value: "Sendto"},
        {label: 'อ้างถึง ',value: "Referto"},
        {label: 'วันที่ของเอกสาร ',value: "Date"}
      ];

   }
  filename; 
  ShowFilecabinetName;

  async ngOnInit(){
    this.filename = await this.GetFilecabinetName();
    for(let name of this.filename){
      this.FilecabinetName = name.Name;
    }
    console.log(this.FilecabinetName);
    this.ShowFilecabinetName  = this.FilecabinetName;
  }

    addUser: boolean;
    AddUserDialog() {
        this.addUser = true;
    }

    addResponsible: boolean;
    AddResponsibleDialog() {
        this.addResponsible = true;
    }

    changeFilecabinetname: boolean
    ChangeFilecabinetnameDialog(){
        this.changeFilecabinetname = true;
    }
  ShowDocument(){
    this.http.get(this.data.ip+'/webservice/showdocument/'+this.Filecabinetid)
        .subscribe(respone =>{
            console.log(respone);
            this.alldocument = respone;
        })
  }

  async AddDocument1(){
    let json = {  Documentid : this.Documentid,
                  Filecabinetid : this.Filecabinetid,
                  Name : this.DocName,
                  Source : this.Source,
                  Sendto : this.Sendto,
                  Referto : this.Referto,
                  Date : this.year+'-'+this.date+'-'+this.month};
    console.log(json);
    let response = await this.http
    .post(this.data.ip+'/webservice/adddocument', JSON.stringify(json)).toPromise();
    console.log(response);
    this.ShowDocument();
  }

  async AddDocument2(){
    let json = {  Documentid : this.Documentid,
                  Filecabinetid : this.Filecabinetid,
                  Name : this.DocName,
                  Source : this.Source,
                  Sendto : this.Sendto,
                  Referto : this.Referto,
                  Date : this.year+'-'+this.date+'-'+this.month};
    console.log(json);
    let response = await this.http
    .post(this.data.ip+'/webservice/adddocument', JSON.stringify(json)).toPromise();
    console.log(response);
    this.MaxDocumentid();
    
  }
 
  async ShowEligibility(){
    this.alleligibility = undefined;
    let response = await this.http
      .get(this.data.ip+'/webservice/showeligibility/'+this.Filecabinetid).toPromise();
    this.alleligibility = response;
    for(let eligibility of this.alleligibility){
      if (eligibility.Userid == this.Userid) {
        this.mystatus = eligibility.Userstatus;
        this.data.Userid = this.Userid;
      }
    }
    console.log(this.mystatus);
    this.data.mystatus = this.mystatus;
  }

  async GetFilecabinetName(){
    let response = this.http
      .get(this.data.ip+'/webservice/getfilecabinetname/'+this.Filecabinetid).toPromise();
    return response;
  }

  AddUserid;
  async AddUser(){
    let json = {  Filecabinetid : this.Filecabinetid,
                  Name : this.FilecabinetName,
                  Userid : this.AddUserid};
    console.log(json);
    let response = await this.http
    .post(this.data.ip+'/webservice/adduser', JSON.stringify(json)).toPromise();
    console.log(response);
    this.ShowEligibility();
  }
  
  AddResponsibleid;
  async AddResponsible(){
      let json = {  Filecabinetid : this.Filecabinetid,
                    Name : this.FilecabinetName,
                    Userid : this.AddResponsibleid};
      console.log(json);
      let response = await this.http
      .post(this.data.ip+'/webservice/addresponsible', JSON.stringify(json)).toPromise();
      console.log(response);
      this.ShowEligibility();
  }  

  async DeleteEligibility(userid){
    let json = {  Filecabinetid : this.Filecabinetid,
                  Userid : userid};
      console.log(json);
      let response = await this.http
      .post(this.data.ip+'/webservice/deleteRorU', JSON.stringify(json)).toPromise();
      console.log(response);
      this.ShowEligibility();
  }

  async ChangeFilecabinetname(){
    this.ShowFilecabinetName  = this.FilecabinetName;
    let json = {  Filecabinetid : this.Filecabinetid,
                           Name : this.FilecabinetName};
      console.log(json);
      let response = await this.http
      .post(this.data.ip+'/webservice/changenamefilecabinet', JSON.stringify(json)).toPromise();
      console.log(response);
  }

  async DeleteFilecabinet(){
    let response = await this.http 
      .get(this.data.ip+'/webservice/deletefilecabinet/'+this.Filecabinetid).toPromise();
    console.log(response)
    if (response >= 0) {
      this.router.navigateByUrl('/home/'+this.Userid);
    }
  }
  
  GotoDocument(id){
    this.router.navigateByUrl('/document/'+id);
  }

  base64;
  fileName;
  url;
  getFile(files : FileList){
    console.log(files.item(0).name);
    let file = files.item(0);
    this.fileName = file.name;
    console.log(this.fileName);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //console.log(reader.result);
      this.base64 = reader.result;
    }
  }
  async Upload(){
    console.log('OK');
    let json ={
        Docid : this.maxdocid,
        Name : this.fileName,
        base64 : this.base64
    }
    console.log(json);
    let response = await this.http
    .post(this.data.ip+'/webservice/uploadfile', JSON.stringify(json)).toPromise();
    console.log(response);
    this.ShowDocument();
  }
  max;
  async MaxDocumentid(){
    let response = await this.http
    .get(this.data.ip+'/webservice/maxdocid').toPromise();
    console.log(response);
    this.max = response;
    for(let id of this.max){
      this.maxdocid = Number(id.maxdocid);
      console.log(this.maxdocid);
    }
    this.Upload();
    
  }
}
