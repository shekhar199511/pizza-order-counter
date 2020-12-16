import { Component, OnInit, ViewChild, TemplateRef, OnChanges } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-pizza-detail-modal',
  templateUrl: './pizza-detail-modal.component.html',
  styleUrls: ['./pizza-detail-modal.component.css'],
  // providers: [OrderListService]
})
export class PizzaDetailModalComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("here1");
    this.orderListService.orderSelected.subscribe((index : number)=>{
      console.log("here");
      this.myModal = this.modalService.open(this.modalRef);
    });
  }

  @ViewChild('content')
  private modalRef: TemplateRef<any> | undefined; 
  private myModal : any;

  constructor(private modalService: NgbModal, private orderListService : OrderListService) { 
    console.log("here1");

  }

  ngOnInit(): void {
    console.log("here1");
    this.orderListService.orderSelected.subscribe((index : number)=>{
      console.log("here");
      this.myModal = this.modalService.open(this.modalRef);
    });
  }


  

}
