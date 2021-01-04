import {OrderItem} from './order-item';

export class SubmitOrder {
    id: number;
    name: string;
    email: string;
    phone: string;
    pickup: string;
    subtotal: any;
    tax: any;
    total: any;
    date: any;
    time: any;
    status: string;
    orderItem: OrderItem[];
}
