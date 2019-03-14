import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public startDate = new Date();
  public endDate = new Date();
  constructor() {
    this.startDate.setDate(this.startDate.getDate() - 1);
    this.endDate.setDate(this.endDate.getDate() + 7);
   }

  ngOnInit() {
  }

}
