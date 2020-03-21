import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
    item: string;
  // date;
  // month;
  // year;
 
  constructor(private http: HttpClient,private router : Router) { }
  ngOnInit(): void {
  }
  // async dmy(){
  //   this.date = [];
  //       for (let i = 0; i < 31; i++) {
  //           this.date.push({label: 'date ' + i, value: 'date ' + i});
  //       }
  //       this.month = [];
  //       for (let i = 0; i < 12; i++) {
  //           this.month.push({label: 'month ' + i, value: 'month ' + i});
  //       }
  //       this.year=[];
  //       for (let i = 2530; i < 2563; i++) {
  //         this.year.push({label: 'year ' + i, value: 'year ' + i});
  //     }
  // }
  this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }
    
}
