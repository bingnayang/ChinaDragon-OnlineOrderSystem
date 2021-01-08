import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { SubmitOrder } from '../../classes/submit-order';

@Component({
  selector: 'app-active-order-detail',
  templateUrl: './active-order-detail.component.html',
  styleUrls: ['./active-order-detail.component.css']
})
export class ActiveOrderDetailComponent implements OnInit {
  id: number;
  updateStatus: boolean;
  orderDetail: SubmitOrder = new SubmitOrder();
  orderStatus: string[] = ['Pick-Up','Cancel-Order','No-Show'];

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrderById(this.id).subscribe(data => {
      this.orderDetail = data;
    },error => console.log(error));
  }

  updateOrder(status: string){
    this.orderDetail.status = status;
    console.log(this.orderDetail);
    this.orderService.updateOrderStatus(this.orderDetail).subscribe(data => {
      this.updateStatus = data;
    })
  }
}
