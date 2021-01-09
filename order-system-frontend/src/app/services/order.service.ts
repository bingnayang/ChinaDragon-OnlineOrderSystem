import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmitOrder } from '../classes/submit-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseURL = "http://localhost:8080/api/orders";
  private today_baseURL = "http://localhost:8080/api/today-orders";

  constructor(private httpClient: HttpClient) { }

  getActiveOrderList(): Observable<SubmitOrder[]>{
    return this.httpClient.get<SubmitOrder[]>(`${this.baseURL}`);
  }

  getOrderById(id: number): Observable<SubmitOrder>{
    return this.httpClient.get<SubmitOrder>(`${this.baseURL}/${id}`);
  }

  updateOrderStatus(order: SubmitOrder): Observable<any>{
    return this.httpClient.put<SubmitOrder>(`${this.baseURL}`,order);
  }

  getTodayOrderList(): Observable<SubmitOrder[]>{
    return this.httpClient.get<SubmitOrder[]>(`${this.today_baseURL}`);
  }  

  getTodayOrderTotal(): Observable<any>{
    return this.httpClient.get<any>(`${this.today_baseURL}/total`);
  }  
}
