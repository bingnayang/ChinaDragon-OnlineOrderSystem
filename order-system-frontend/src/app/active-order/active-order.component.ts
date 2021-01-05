import { Component, OnInit } from '@angular/core';
import { SubmitOrder } from '../classes/submit-order';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
  activeOrderList: SubmitOrder[];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.getActiveOrderList();
  }

  getActiveOrderList(){
    this.orderService.getActiveOrderList().subscribe(data => {
      this.activeOrderList = data;
    },error => console.log(error))
  }

  viewOrderDetail(id: number){
    console.log(id)
    this.router.navigate(['active-order-detail',id]);
  }
}
