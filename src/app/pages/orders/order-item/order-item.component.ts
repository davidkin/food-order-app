import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IOrderItem } from 'src/app/shared/interfaces/IOrderItem';
import { ItemService } from 'src/app/shared/services/item.service';
import { IItem } from 'src/app/shared/interfaces/IItem';
import { ITEM } from 'src/app/shared/api_mocks';
import { NgForm } from '@angular/forms';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit, OnDestroy {
  formData: IOrderItem;
  itemList: Array<IItem>;
  $getItem: Subscription;
  isValid = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemComponent>,
    private itemService: ItemService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.$getItem = this.itemService.getItemList().subscribe(
      data => {
        console.log('Success: ', data);
        this.itemList = ITEM;
      }
    );

    if (this.data.orderItemId === null) {
      this.formData = {
        orderItemId: null,
        orderId: this.data.orderId,
        itemId: 0,
        itemName: '',
        quantity: 0,
        price: 0,
        total: 0
      };
    } else {
      this.formData = Object.assign({}, this.orderService.orderItems[this.data.orderItemId]);
    }

  }

  ngOnDestroy(): void {
    this.$getItem.unsubscribe();
  }

  updatePrice(e) {
    if (e.selectedIndex === 0) {
      this.formData.price = 0;
      this.formData.itemName = '';
    } else {
      this.formData.price = this.itemList[e.selectedIndex - 1].price;
      this.formData.itemName = this.itemList[e.selectedIndex - 1].name;
    }

    this.updateTotal();
  }

  updateTotal() {
    this.formData.total = parseFloat((this.formData.quantity * this.formData.price).toFixed(2));
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.orderItemId === null) {
        this.orderService.orderItems.push(form.value);
      } else {
        this.orderService.orderItems[this.data.orderItemId] = form.value;
      }

      this.dialogRef.close();
    }
  }

  validateForm(formData: IOrderItem) {
    if (formData.itemId === 0) {
      this.isValid = false;
    } else if (formData.quantity === 0) {
      this.isValid = false;
    }

    return this.isValid;
  }
}
