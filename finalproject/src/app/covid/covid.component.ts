import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Time } from '@angular/common';

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
  date1: Date;
  time:Time;
  displayBasic: boolean;
  constructor() {
    this.dates = [];
    for (let i = 1; i <= 31; i++) {
        this.dates.push({label:''+  i, value: i});
    }
   
    this.genders = [
      {label:'ชาย',value: 'ชาย'},
      {label:'หญิง',value: 'หญิง'}];
    this.statues = [
      {label: 'ทั้งหมด',value: 'ทั้งหมด'},
      {label: 'ติดเชื้อ',value: 'ติดเชื้อ'},
      {label: 'อาการหนัก',value: 'อาการหนัก'},
      {label: 'รักษาหายแล้ว',value: 'รักษาหายแล้ว'}];

    this.records = [
      {label: '3',value: 3},
      {label: '5',value: 5},
      {label: '10',value: 10}];
  
   this.provinces = [
    {label: 'ทั้งหมด',value: 'ทั้งหมด'},
    {label: 'ติดเชื้อ',value: 'ติดเชื้อ'},
    {label: 'อาการหนัก',value: 'อาการหนัก'},
    {label: 'รักษาหายแล้ว',value: 'รักษาหายแล้ว'}];

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

  }
   ngOnInit(): void {
  }
  showBasicDialog() {
    this.displayBasic = true;
   
  }
  
}
