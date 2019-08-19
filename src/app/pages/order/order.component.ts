import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemComponent } from './order-item/order-item.component';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ICustomer } from 'src/app/shared/interfaces/ICustomer';
import { CUSTOMERS } from 'src/app/shared/api_mocks';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  customerList: ICustomer[];
  isValid = true;

  constructor(
    public orderService: OrderService,
    private dialog: MatDialog,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.resetForm();

    this.customerService.getCustomList().subscribe(
     data => {
       console.log('Customers: success', data);
       this.customerList = CUSTOMERS;
     }
    );
  }

  resetForm(form?: NgForm) {
    if (form === null) {
      form.resetForm();
    }

    this.orderService.formData = {
      orderId: null,
      orderNo: Math.floor(100000 + Math.random() * 900000).toString(),
      customerId: 0,
      pMethod: '',
      gTotal: 0
    };

    this.orderService.orderItems = [];
  }

  addOrEditItem(orderItemId, orderId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = { orderItemId, orderId };

    this.dialog.open(OrderItemComponent, dialogConfig)
                .afterClosed()
                .subscribe(
                  () => this.updateGrandTotal()
                );
  }

  onDeleteItem(orderItemId: number, i: number) {
    this.orderService.orderItems.splice(i, 1);
    this.updateGrandTotal();
  }

  updateGrandTotal() {
    this.orderService.formData.gTotal = this.orderService.orderItems
                                            .reduce((acc, curr) => acc + curr.total, 0);

    this.orderService.formData.gTotal = parseFloat(this.orderService.formData.gTotal.toFixed(2));
  }

  validateFrom() {
    if (this.orderService.formData.customerId === 0) {
      this.isValid = false;
    } else if (this.orderService.orderItems.length === 0) {
      this.isValid = false;
    }

    return this.isValid;
  }

  onSubmit(from: NgForm) {
    if (this.validateFrom()) {

    }
  }
}
