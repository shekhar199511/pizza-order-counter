import { EventEmitter } from '@angular/core';


export class OrderListService{

    private orders = [{CustomerName : 'Rob', DeliveryAddress : 'Banaglore', NoOfItems: '5', Amount : '15', 
                    TotalAmount : '75', Status : 'Ready To Serve'},
                    {CustomerName : 'Danny', DeliveryAddress : 'Chennai', NoOfItems: '1', Amount : '15', 
                    TotalAmount : '15', Status : 'Order Received'},
                    {CustomerName : 'Leslie', DeliveryAddress : 'Hyderabad', NoOfItems: '2', Amount : '15', 
                    TotalAmount : '30', Status : 'Preparing'}]; 

    getOrders(){
        return this.orders.slice();
    }

    getOrder(index : number){
        return this.orders.slice()[index];
    }

    

    orderSelected = new EventEmitter<any>();

}