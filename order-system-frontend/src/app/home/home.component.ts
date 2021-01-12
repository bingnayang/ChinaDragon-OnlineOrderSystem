import { Component, OnInit } from '@angular/core';
import { SubmitOrder } from '../classes/submit-order';
import { OrderService } from '../services/order.service';
import * as CanvasJS from '../../assets/canvasjs-3.2.6/canvasjs.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orderList: SubmitOrder[];
  orderListByDate: SubmitOrder[];
  pickUpOrderCount: number = 0;
  cancelOrderCount: number = 0;
  noShowOrderCount: number = 0;
  today: string;
  todayDate : string = new Date().toISOString().slice(0, 10)

  constructor(private orderService: OrderService) { 
    this.today = new Date().toJSON().split("T")[0];
  }

  ngOnInit(): void {
    this.getAllOrderList();
    this.getOrderListByDate(this.today);
    console.log(this.todayDate)
  }

  getAllOrderList() {
    this.orderService.getAllOrderList().subscribe(data => {
      this.orderList = data;
      this.getOrderStatusCount(this.orderList);
    })
  }

  getOrderStatusCount(orderList: SubmitOrder[]) {
    // Count the order status
    for (const key of orderList) {
      if (key.status === 'Pick-Up') {
        this.pickUpOrderCount++;
      }
      if (key.status === 'Cancel-Order') {
        this.cancelOrderCount++;
      }
      if (key.status === 'No-Show') {
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

  getOrderListByDate(today: string){
    this.orderService.getOrderListByDate(today).subscribe(data => {
      this.orderListByDate = data;
    })
  }

  onSubmit(){
    console.log(this.today)
    this.getOrderListByDate(this.today);
  }
}
