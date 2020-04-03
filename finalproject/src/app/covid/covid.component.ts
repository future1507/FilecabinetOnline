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
  day:Date;
  houres:SelectItem[];
  houre:Time;
  minutes:SelectItem[];
  minute:Time;
  monthes:SelectItem[];
  month:Date;
  years:SelectItem[];
  year:Date;
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

     this.houres = [
      {label:'	0'	,value:'0'},
      {label:'	1'	,value:'1'},
      {label:'	2'	,value:'2'},
      {label:'	3'	,value:'3'},
      {label:'	4'	,value:'4'},
      {label:'	5'	,value:'5'},
      {label:'	6'	,value:'6'},
      {label:'	7'	,value:'7'},
      {label:'	8'	,value:'8'},
      {label:'	9'	,value:'9'},
      {label:'	10'	,value:'10'},
      {label:'	11'	,value:'11'},
      {label:'	12'	,value:'12'},
      {label:'	13'	,value:'13'},
      {label:'	14'	,value:'14'},
      {label:'	15'	,value:'15'},
      {label:'	16'	,value:'16'},
      {label:'	17'	,value:'17'},
      {label:'	18'	,value:'18'},
      {label:'	19'	,value:'19'},
      {label:'	20'	,value:'20'},
      {label:'	21'	,value:'21'},
      {label:'	22'	,value:'22'},
      {label:'	23'	,value:'23'},
      
     ];
     this.minutes = [
      {label:'	0'	,value:'	0'	},
      {label:'	1'	,value:'	1'  },
      {label:'	2'	,value:'	2'  },
      {label:'	3'	,value:'	3'	},
      {label:'	4'	,value:'	4'	},
      {label:'	5	' ,value:'	5'	},
      {label:'	6'	,value:'	6'	},
      {label:'	7'	,value:'	7'	},
      {label:'	8'	,value:'	8'	},
      {label:'	9'	,value:'	9'	},
      {label:'	10'	,value:'	10'	},
      {label:'	11'	,value:'	11'	},
      {label:'	12'	,value:'	12'	},
      {label:'	13'	,value:'	13'	},
      {label:'	14'	,value:'	14'	},
      {label:'	15'	,value:'	15'	},
      {label:'	16'	,value:'	16'	},
      {label:'	17'	,value:'	17' },
      {label:'	18'	,value:'	18'	},
      {label:'	19'	,value:'	19'	},
      {label:'	20'	,value:'	20'	},
      {label:'	21'	,value:'	21'	},
      {label:'	22'	,value:'	22'	},
      {label:'	23'	,value:'	23'	},
      {label:'	24'	,value:'	24'	},
      {label:'	25'	,value:'	25' },
      {label:'	26'	,value:'	26'	},
      {label:'	27'	,value:'	27'	},
      {label:'	28'	,value:'	28'	},
      {label:'	29'	,value:'	29'	},
      {label:'	30'	,value:'	30'	},
      {label:'	31'	,value:'	31'	},
      {label:'	32'	,value:'	32'	},
      {label:'	33'	,value:'	33'	},
      {label:'	34'	,value:'	34'	},
      {label:'	35'	,value:'	35'	},
      {label:'	36'	,value:'	36'	},
      {label:'	37'	,value:'	37'	},
      {label:'	38'	,value:'	38'	},
      {label:'	39'	,value:'	39'	},
      {label:'	40'	,value:'	40'	},
      {label:'	41'	,value:'	41'	},
      {label:'	42'	,value:'	42'	},
      {label:'	43'	,value:'	43'	},
      {label:'	44'	,value:'	44'	},
      {label:'	45'	,value:'	45'	},
      {label:'	46'	,value:'	46'	},
      {label:'	47'	,value:'	47'	},
      {label:'	48'	,value:'	48'	},
      {label:'	49'	,value:'	49'	},
      {label:'	50'	,value:'	50'	},
      {label:'	51'	,value:'	51'	},
      {label:'	52'	,value:'	52'	},
      {label:'	53'	,value:'	53'	},
      {label:'	54'	,value:'	54'	},
      {label:'	55'	,value:'	55'	},
      {label:'	56'	,value:'	56'	},
      {label:'	57'	,value:'	57'	},
      {label:'	58'	,value:'	58'	},
      {label:'	59'	,value:'	59'	},
      
     ];
     this.days = [
      {label:'	1'	,value:'	1'	},
      {label:'	2'  ,value:'	2'	},
      {label:'	3'	,value:'	3'	},
      {label:'	4'	,value:'	4'	},
      {label:'	5'	,value:'	5'	},
      {label:'	6'	,value:'	6'	},
      {label:'	7'	,value:'	7'	},
      {label:'	8'	,value:'	8'	},
      {label:'	9'	,value:'	9'	},
      {label:'	10'	,value:'	10'	},
      {label:'	11'	,value:'	11'	},
      {label:'	12'	,value:'	12'	},
      {label:'	13'	,value:'	13'	},
      {label:'	14'	,value:'	14'	},
      {label:'	15'	,value:'	15'	},
      {label:'	16'	,value:'	16'	},
      {label:'	17'	,value:'	17'	},
      {label:'	18'	,value:'	18'	},
      {label:'	19'	,value:'	19'	},
      {label:'	20'	,value:'	20'	},
      {label:'	21'	,value:'	21'	},
      {label:'	22'	,value:'	22'	},
      {label:'	23'	,value:'	23'	},
      {label:'	24'	,value:'	24' },
      {label:'	25'	,value:'	25'	},
      {label:'	26'	,value:'	26'	},
      {label:'	27'	,value:'	27'	},
      {label:'	28'	,value:'	28'	},
      {label:'	29'	,value:'	29'	},
      {label:'	30'	,value:'	30'	},
      {label:'	31'	,value:'	31'	},
      
     ];
     this.monthes = [
      {label:'	1'	,value:'	1'	},
      {label:'	2'	,value:'	2'	},
      {label:'	3'  ,value:'	3'	},
      {label:'	4'	,value:'	4'	},
      {label:'	5'	,value:'	5'	},
      {label:'	6'	,value:'	6'	},
      {label:'	7'	,value:'	7'	},
      {label:'	8'	,value:'	8'	},
      {label:'	9'	,value:'	9'	},
      {label:'	10'	,value:'	10'	},
      {label:'	11'	,value:'	11'	},
      {label:'	12'	,value:'	12'	},
      
     ];
     this.years = [
      {label:'	2018'	,value:'	2018'	},
      {label:'	2019'	,value:'	2019'	},
      {label:'	2020'	,value:'	2020'	},
      {label:'	2021'	,value:'	2021'	},
      
     ];
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
                  Date : this.date,
                  // Date:this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear(),
                  Time : this.time};
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
