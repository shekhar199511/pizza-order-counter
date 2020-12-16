import { Component } from '@angular/core';

import { OrderListComponent } from './order-list/order-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza-order-counter';
}
