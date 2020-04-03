import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  statues : SelectItem[];
  status: string;
  provinces: SelectItem[];
  province: string;
  records : SelectItem[];
  record: string;
  gender:string;
  genders: SelectItem[];
  dates : SelectItem[];
  date: string;

  

  displayBasic: boolean;

  covids;

  constructor(private http: HttpClient,private router : Router
    ,private data : DatapassService) {
    this.ShowCovid();
    
   
    this.genders = [
      {label:'ชาย',value: 'ชาย'},
      {label:'หญิง',value: 'หญิง'}];

    this.statues = [
      {label: 'ทั้งหมด',value: 'ทั้งหมด'},
      {label: 'ติดเชื้อ',value: 'ติดเชื้อ'},
      {label: 'อาการหนัก',value: 'อาการหนัก'},
      {label: 'รักษาหายแล้ว',value: 'รักษาหายแล้ว'}];

    this.record = "3";
    this.records = [
      {label: '3',value: 3},
      {label: '5',value: 5},
      {label: '10',value: 10}];
  
   this.provinces = [
    //{label: 'ทั้งหมด',value: 'ทั้งหมด'},
    {label: 'ติดเชื้อ',value: 'ติดเชื้อ'},
    {label: 'อาการหนัก',value: 'อาการหนัก'},
    {label: 'รักษาหายแล้ว',value: 'รักษาหายแล้ว'}];
  }
   ngOnInit(): void {
  }


  async ShowCovid(){
    this.covids = undefined;
    let response = await this.http
      .get(this.data.ip+'/coservice/show').toPromise();
    this.covids = response;
    console.log(this.covids);
  }
  showBasicDialog() {
    this.displayBasic = true;
  }

  DeleteDialog: boolean;
  showDeleteDialog() {
    this.DeleteDialog = true;
  }
  async DeleteCovid(Id){
    let response = await this.http
        .get(this.data.ip+'/coservice/delete/'+Id).toPromise();
        console.log(response);
        this.ShowCovid();
  }

  UpdateDialog: boolean;
  showUpdateDialog() {
    this.UpdateDialog = true;
  }
  async UpdateCovid(Id){

  }
  
}
