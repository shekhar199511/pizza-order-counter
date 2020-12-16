import { Component, OnInit } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { PizzaDetailModalComponent } from './pizza-detail-modal/pizza-detail-modal.component'
import { OrderListService } from './order-list.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderListService]
})
export class OrderListComponent implements OnInit {

  showModal : boolean = false;

  name: string = '';
  address: string = '';
  items: string = '';
  amount: string = '';
  totalAmt: string = '';
  
  
  orders: {
    CustomerName: string;
    DeliveryAddress: string;
    NoOfItems: string;
    Amount: string;
    TotalAmount: string;
    Status: string;
  }[] = [];

  

  constructor(private orderListService : OrderListService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.orders = this.orderListService.getOrders();
  }

  changeStatus(index : any){
    if(this.orders[index].Status==='Ready To Serve'){
      this.orders[index].Status = 'Ready To Serve';
    }else if(this.orders[index].Status==='Order Received'){
      this.orders[index].Status = 'Ready To Serve';
    }else if(this.orders[index].Status==='Preparing'){
      this.orders[index].Status = 'Order Received';
    }
  }

  openDescription(content : any, index : any, event : any){
    
    if(event.target.tagName!="BUTTON"){
      this.name = this.orders[index].CustomerName;
      this.amount = this.orders[index].Amount;
      this.totalAmt = this.orders[index].TotalAmount;
      this.address = this.orders[index].DeliveryAddress;
      this.items = "Pizza";
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

  }

}
