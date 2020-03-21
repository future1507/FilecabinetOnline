import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  date;
  month;
  year;
 
  constructor(private http: HttpClient,private router : Router) {
    this.date = [];
      for (let i = 1; i <= 31; i++) {
          this.date.push({label:  i, value: i});
      }
    this.month = [];
      for (let i = 1; i <= 12; i++) {
          this.month.push({label: i, value: i});
      }
    this.year=[];
      for (let i = 2530; i <= 2563; i++) {
        this.year.push({label: i, value: i});
    }
   }
  ngOnInit(): void {
  }

 
    
}
