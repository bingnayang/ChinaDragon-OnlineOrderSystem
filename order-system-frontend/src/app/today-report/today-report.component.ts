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

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getTodayOrderList();
  }

  getTodayOrderList(){
    this.orderService.getTodayOrderList().subscribe(data => {
      this.todayOrder = data;
      console.log(this.todayOrder);
    })
  }

}
