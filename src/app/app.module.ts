import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import CoreModule from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './pages/orders/order/order.component';
import { OrderItemComponent } from './pages/orders/order-item/order-item.component';
import { OrdersComponent } from './pages/orders/orders.component';

import { CustomerService } from './shared/services/customer.service';
import { ItemService } from './shared/services/item.service';
import { OrderService } from './pages/orders/order.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],
  providers: [
    CustomerService,
    ItemService,
    OrderService
  ],
  entryComponents: [OrderItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
