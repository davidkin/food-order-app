import { Injectable } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces/IOrder';
import { IOrderItem } from 'src/app/shared/interfaces/IOrderItem';

@Injectable()
export class OrderService {
    formData: IOrder;
    orderItems: Array<IOrderItem>;

    constructor() {}
}
