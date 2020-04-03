import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  statues : SelectItem[];
  status: string;
  records : SelectItem[];
  record: string;

  dates : SelectItem[];
  date: string;
  constructor() {
    this.dates = [];
    for (let i = 1; i <= 31; i++) {
        this.dates.push({label:''+  i, value: i});
    }
    
    this.statues = [
      {label: 'ทั้งหมด',value: 'ทั้งหมด'},
      {label: 'ติดเชื้อ',value: 'ติดเชื้อ'},
      {label: 'อาการหนัก',value: 'อาการหนัก'},
      {label: 'รักษาหายแล้ว',value: 'รักษาหายแล้ว'}];

    this.records = [
      {label: '3',value: 3},
      {label: '5',value: 5},
      {label: '10',value: 10}];
   }
   ngOnInit(): void {
  }
}
