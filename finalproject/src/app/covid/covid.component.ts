import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatapassService } from '../datapass.service';
import { Time } from '@angular/common';



@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
  
  
})
export class CovidComponent implements OnInit {

  statues : SelectItem[];
  status: string;
  provinces: SelectItem[];
  province=null;
  records : SelectItem[];
  record: string;
  gender=null;
  genders: SelectItem[];
  date1: Date;
  displayBasic: boolean;
  dates:SelectItem[];
  times:SelectItem[];
  date:Date;
  time:Time;
  covids;
  date8: Date;
  Name=null;
  Career=null;

  days:SelectItem[];
  day:string;
  houres:SelectItem[];
  houre:string;
  minutes:SelectItem[];
  minute:string;
  monthes:SelectItem[];
  month:string;
  years:SelectItem[];
  year:string;
  seconds = new Date().getTime()/1000;

  invalidDates: Array<Date>;

  constructor(private http: HttpClient,private router : Router
    ,private data : DatapassService) {
    this.ShowCovid();

    this.genders = [
      {label:'ชาย',value: 'ชาย'},
      {label:'หญิง',value: 'หญิง'}];

    this.statues = [
      //{label: 'ทั้งหมด',value: 'ทั้งหมด'},
      {label: 'ติดเชื้อ',value: 'ติดเชื้อ'},
      {label: 'อาการหนัก',value: 'อาการหนัก'},
      {label: 'รักษาหายแล้ว',value: 'รักษาหายแล้ว'}];

    this.record = "3";
    this.records = [
      {label: '3',value: 3},
      {label: '5',value: 5},
      {label: '10',value: 10}];

    this.provinces = [
      {label: 'กระบี่',value: 'กระบี่'},
      {label: 'กรุงเทพฯ',value: 'กรุงเทพฯ'},
      {label: 'กาญจนบุรี',value: 'กาญจนบุรี'},
      {label: 'กาฬสินธุ์',value: 'กาฬสินธุ์'},
      {label: 'กำแพงเพชร',value: 'กำแพงเพชร'},
      {label: 'ขอนแก่น',value: 'ขอนแก่น'},
      {label: 'จันทบุรี',value: 'จันทบุรี'},
      {label: 'ฉะเชิงเทรา',value: 'ฉะเชิงเทรา'},
      {label: 'ชลบุรี',value: 'ชลบุรี'},
      {label: 'ชัยนาท',value: 'ชัยนาท'},
      {label: 'ชัยภูมิ',value: 'ชัยภูมิ'},
      {label: 'ชุมพร',value: 'ชุมพร'},
      {label: 'เชียงราย',value: 'เชียงราย'},
      {label: 'เชียงใหม่',value: 'เชียงใหม่'},
      {label: 'ตรัง',value: 'ตรัง'},
      {label: 'ตราด',value: 'ตราด'},
      {label: 'ตาก',value: 'ตาก'},
      {label: 'นครนายก',value: 'นครนายก'},
      {label: 'นครปฐม',value: 'นครปฐม'},
      {label: 'นครพนม',value: 'นครพนม'},
      {label: 'นครราชสีมา',value: 'นครราชสีมา'},
      {label: 'นครศรีธรรมราช',value: 'นครศรีธรรมราช'},
      {label: 'นครสวรรค์',value: 'นครสวรรค์'},
      {label: 'นนทบุรี',value: 'นนทบุรี'},
      {label: 'นราธิวาส',value: 'นราธิวาส'},
      {label: 'น่าน',value: 'น่าน'},
      {label: 'บึงกาฬ',value: 'บึงกาฬ'},
      {label: 'บุรีรัมย์',value: 'บุรีรัมย์'},
      {label: 'ปทุมธานี',value: 'ปทุมธานี'},
      {label: 'ประจวบคีรีขันธ์',value: 'ประจวบคีรีขันธ์'},
      {label: 'ปราจีนบุรี',value: 'ปราจีนบุรี'},
      {label: 'ปัตตานี',value: 'ปัตตานี'},
      {label: 'พระนครศรีอยุธยา',value: 'พระนครศรีอยุธยา'},
      {label: 'พะเยา',value: 'พะเยา'},
      {label: 'พังงา',value: 'พังงา'},
      {label: 'พัทลุง',value: 'พัทลุง'},
      {label: 'พิจิตร',value: 'พิจิตร'},
      {label: 'พิษณุโลก',value: 'พิษณุโลก'},
      {label: 'เพชรบุรี',value: 'เพชรบุรี'},
      {label: 'เพชรบูรณ์',value: 'เพชรบูรณ์'},
      {label: 'แพร่',value: 'แพร่'},
      {label: 'ภูเก็ต	',value: 'ภูเก็ต'},
      {label: 'มหาสารคาม',value: 'มหาสารคาม'},
      {label: 'มุกดาหาร',value: 'มุกดาหาร'},
      {label: 'แม่ฮ่องสอน',value: 'แม่ฮ่องสอน'},
      {label: 'ยโสธร',value: 'ยโสธร'},
      {label: 'ยะลา',value: 'ยะลา'},
      {label: 'ร้อยเอ็ด',value: 'ร้อยเอ็ด'},
      {label: 'ระนอง',value: 'ระนอง'},
      {label: 'ระยอง',value: 'ระยอง'},
      {label: 'ราชบุรี',value: 'ราชบุรี'},
      {label: 'ลพบุรี',value: 'ลพบุรี'},
      {label: 'ลำปาง',value: 'ลำปาง'},
      {label: 'ลำพูน',value: 'ลำพูน'},
      {label: 'เลย',value: 'เลย'},
      {label: 'ศรีสะเกษ',value: 'ศรีสะเกษ'},
      {label: 'สกลนคร',value: 'สกลนคร'},
      {label: 'สงขลา',value: 'สงขลา'},
      {label: 'สตูล',value: 'สตูล'},
      {label: 'สมุทรปราการ',value: 'สมุทรปราการ'},
      {label: 'สมุทรสงคราม',value: 'สมุทรสงคราม'},
      {label: 'สมุทรสาคร',value: 'สมุทรสาคร'},
      {label: 'สระแก้ว',value: 'สระแก้ว'},
      {label: 'สระบุรี',value: 'สระบุรี'},
      {label: 'สิงห์บุรี',value: 'สิงห์บุรี'},
      {label: 'สุโขทัย',value: 'สุโขทัย'},
      {label: 'สุพรรณบุรี',value: 'สุพรรณบุรี'},
      {label: 'สุราษฎร์ธานี',value: 'สุราษฎร์ธานี'},
      {label: 'สุรินทร์',value: 'สุรินทร์'},
      {label: 'หนองคาย',value: 'หนองคาย'},
      {label: 'หนองบัวลำภู',value: 'หนองบัวลำภู'},
      {label: 'อ่างทอง',value: 'อ่างทอง'	},
      {label: 'อำนาจเจริญ',value: 'อำนาจเจริญ'}	,
      {label: 'อุดรธานี',value: 'อุดรธานี'},
      {label: 'อุตรดิตถ์',value: 'อุตรดิตถ์'},
      {label: 'อุทัยธานี',value: 'อุทัยธานี'},
      {label: 'อุบลราชธานี',value: 'อุบลราชธานี'}];
     
 
     this.days = [];
        for (let i = 1; i <= 31; i++) {
            this.days.push({label:''+  i, value: i});
        }
     this.monthes = [];
        for (let i = 1; i <= 12; i++) {
          this.monthes.push({label:''+  i, value: i});
      }
     this.years = [];
     for (let i = 2019; i <= 2020; i++) {
      this.years.push({label:''+  i, value: i});
    }
    this.houres = [];
      for (let i = 0; i <= 23; i++) {
        if (i<10) {
          this.houres.push({label:''+  i, value: "0"+i});
        }
        else{
          this.houres.push({label:''+  i, value: i});
        } 
      }
     this.minutes = [];
        for (let i = 0; i <= 59; i++) {
          if (i<10) {
            this.minutes.push({label:''+  i, value: "0"+i});
          }
          else{
            this.minutes.push({label:''+  i, value: i});
          } 
        }
  }
  en: any;
   ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
      monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'Wk'
  };
  let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
       
        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
  }

  async AddCovid(){
    let json = {  Name : this.Name,
                  Gender : this.gender,
                  Career : this.Career,
                  Province : this.province,
                  Date : this.year+"-"+this.day+"-"+this.month,
                  Time : this.houre+":"+this.minute+":"+"00"};
    console.log(json);
    let response = await this.http
    .post(this.data.ip+'/coservice/add', JSON.stringify(json)).toPromise();
    console.log(response);
    this.ShowCovid();
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

  Deleteid;
  DeleteDialog: boolean;
  showDeleteDialog(Id) {
    this.DeleteDialog = true;
    this.Deleteid = Id;
    console.log(this.Deleteid);
  }
  async DeleteCovid(){
    console.log(this.Deleteid);
    let response = await this.http
        .get(this.data.ip+'/coservice/delete/'+this.Deleteid).toPromise();
        console.log(response);
        this.ShowCovid();
  }

  UpdateStatus;
  Updateid;
  UpdateDialog: boolean;
  showUpdateDialog(Id,Status) {
    this.UpdateDialog = true;
    this.UpdateStatus = Status;
    this.Updateid = Id;
    console.log(this.Updateid+"="+this.UpdateStatus)
  }
  async UpdateCovid(){
    let json = {  Status : this.UpdateStatus,
                  Id : this.Updateid,};
    let response = await this.http
    .post(this.data.ip+'/coservice/update', JSON.stringify(json)).toPromise();
    console.log(response);
    this.ShowCovid();
  }
  
  

}
