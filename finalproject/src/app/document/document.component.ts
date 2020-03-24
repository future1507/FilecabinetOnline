import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  base64; filename; docid;

  dates : SelectItem[];
  months : SelectItem[];
  years : SelectItem[];
  
  mystatus;

  allfile: any[];

  constructor(private http: HttpClient,private acrouter : ActivatedRoute,
    private data : DatapassService) {
      this.docid = acrouter.snapshot.params['Documentid'];
      this.mystatus = this.data.mystatus;
      this.GetDocument();
      this.allfile = [];

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
        for (let i = 2530; i <= 2563; i++) {
          this.years.push({label:''+ i, value: i});
      } 
      this.ShowFiles();
   }

  ngOnInit(): void {
  }
  getFile(files : FileList){
    console.log(files.item(0).name);
    let file = files.item(0);
    this.filename = file.name;
    console.log(this.filename);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //console.log(reader.result);
      this.base64 = reader.result;
    }
  }
  Upload(){
    console.log('OK');
    let json ={
        Docid : this.docid,
        Name : this.filename,
        base64 : this.base64
    }
    this.http.post(this.data.ip+'/webservice/uploadfile', JSON.stringify(json))
        .subscribe(data =>{
            console.log(data);
            /*let jsonObj : any = data;
            this.url = jsonObj.url;*/
            this.ShowFiles();
        },error =>{
        });
        
  }
  // async Upload(){
  //   console.log('OK');
  //   let json ={
  //       Docid : this.docid,
  //       Name : this.filename,
  //       base64 : this.base64
  //   }
  //   console.log(json);
  //   let response = await this.http
  //   .post('http://localhost:80/webservice/uploadfile', JSON.stringify(json)).toPromise();
  //   console.log(response);
  //   this.ShowFiles();
  // }

  Document;
  Documentid;
  Filecabinetid;
  DocName;
  Source;
  Sendto;
  Referto;
  Day : string;
  Month : string;
  Year : string;
  async GetDocument(){
    let response = await this.http 
      .get(this.data.ip+'/webservice/getdocument/'+this.docid).toPromise();
    console.log(response);
    this.Document = response;
    for(let Doc of this.Document){
      this.Documentid = Doc.Documentid;
      this.Filecabinetid = Doc.Filecabinetid;
      this.DocName = Doc.Name;
      this.Source = Doc.Source;
      this.Sendto = Doc.Sendto;
      this.Referto = Doc.Referto;
      this.Day = Doc.Day;
      this.Month = Doc.Month;
      this.Year = Doc.Year;
    } 
  }

  async SaveDocument(){
    let json = {  Documentid : this.Documentid,
                  Name : this.DocName,
                  Source : this.Source,
                  Sendto : this.Sendto,
                  Referto : this.Referto,
                  Date : this.Year+'-'+this.Day+'-'+this.Month,
                  id  : this.docid};
      console.log(json);
      let response = await this.http
      .post(this.data.ip+'/webservice/editdocument', JSON.stringify(json)).toPromise();
      console.log(response);
  }
 
  files;
  ShowFiles(){
    this.files = undefined;
    console.log('OK');
    this.http.get(this.data.ip+'/webservice/showfile/'+this.docid)
        .subscribe(response =>{
            console.log(response);
            this.files = response;
        },error =>{
        });
  }
  
  async Delete(Fileid,Name){
    let json = {  Fileid : Fileid,
                  Name : Name,
                  Docid : this.docid};
    console.log(json);
    let response = await this.http
    .post(this.data.ip+'/webservice/deletefile', JSON.stringify(json)).toPromise();
    console.log(response);
    this.ShowFiles();
  }

}
