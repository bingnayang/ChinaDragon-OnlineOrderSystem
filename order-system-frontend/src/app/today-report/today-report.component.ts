import { Component, OnInit } from '@angular/core';
import { SubmitOrder } from '../classes/submit-order';
import { OrderService } from '../services/order.service';
import * as CanvasJS from '../../assets/canvasjs-3.2.6/canvasjs.min.js';

@Component({
  selector: 'app-today-report',
  templateUrl: './today-report.component.html',
  styleUrls: ['./today-report.component.css']
})
export class TodayReportComponent implements OnInit {
  todayOrder: SubmitOrder[];
  todayOrderTotal: any;
  todaySubmittedOrder: any;
  pickUpOrderCount: number = 0;
  cancelOrderCount: number = 0;
  noShowOrderCount: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getTodayOrderList();
    this.getTodayOrderTotal();
  }

  getTodayOrderList(){
    this.orderService.getTodayOrderList().subscribe(data => {
      this.todayOrder = data;
      this.todaySubmittedOrder = data.length;
      this.getTodayOrderStatusCount(this.todayOrder);
    })
  }

  getTodayOrderTotal(){
    this.orderService.getTodayOrderTotal().subscribe(data => {
      this.todayOrderTotal = data;
      console.log(this.todayOrderTotal);
    })
  }

  getTodayOrderStatusCount(todayOrder: SubmitOrder[]){
    // Count the order status
    for(const key of todayOrder){
      if(key.status === 'Pick-Up'){
        this.pickUpOrderCount++;
      }
      if(key.status === 'Cancel-Order'){
        this.cancelOrderCount++;
      }
      if(key.status === 'No-Show'){
        this.noShowOrderCount++;
      }
    }
    // Setup for chart
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Online-Order Status Count"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: this.pickUpOrderCount, label: "Pick-Up" },
          { y: this.cancelOrderCount, label: "Cancel-Order" },
          { y: this.noShowOrderCount, label: "No-Show" }
        ]
      }]
    });
    chart.render();
  }

}
