import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmitOrder } from '../classes/submit-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseURL = "http://localhost:8080/api/active-orders";

  constructor(private httpClient: HttpClient) { }

  getActiveOrderList(): Observable<SubmitOrder[]>{
    return this.httpClient.get<SubmitOrder[]>(`${this.baseURL}`);
  }
}
