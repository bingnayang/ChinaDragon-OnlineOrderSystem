import { Component, OnInit } from '@angular/core';
import { SubmitOrder } from '../classes/submit-order';
import { OrderService } from '../services/order.service';
import * as CanvasJS from '../../../node_modules/canvasjs/dist/canvasjs.min.js';

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
    this.getTodayOrderStatusCount();
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

  getTodayOrderStatusCount(){
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Online-Order Status Count"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Pick-Up" },
          { y: 55, label: "Cancel" },
          { y: 50, label: "No-Show" }
        ]
      }]
    });
    chart.render();
  }

}
