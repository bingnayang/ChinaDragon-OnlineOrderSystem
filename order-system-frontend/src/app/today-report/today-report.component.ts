import { Component, OnInit } from '@angular/core';
import { SubmitOrder } from '../classes/submit-order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-today-report',
  templateUrl: './today-report.component.html',
  styleUrls: ['./today-report.component.css']
})
export class TodayReportComponent implements OnInit {
  todayOrder: SubmitOrder[];
  todayOrderTotal: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getTodayOrderList();
    this.getTodayOrderTotal();
  }

  getTodayOrderList(){
    this.orderService.getTodayOrderList().subscribe(data => {
      this.todayOrder = data;
      console.log(this.todayOrder);
    })
  }

  getTodayOrderTotal(){
    this.orderService.getTodayOrderTotal().subscribe(data => {
      this.todayOrderTotal = data;
      console.log(this.todayOrderTotal);
    })
  }

}
