import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PizzaDetailModalComponent } from './order-list/pizza-detail-modal/pizza-detail-modal.component';
import { OrderListService } from './order-list/order-list.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    NavigationBarComponent,
    PizzaDetailModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
