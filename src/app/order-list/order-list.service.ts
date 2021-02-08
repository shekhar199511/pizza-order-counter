import { EventEmitter } from '@angular/core';


export class OrderListService{

    private orders = [{CustomerName : 'Arpita', DeliveryAddress : 'Karnataka', NoOfItems: '2', Amount : '30', 
                    TotalAmount : '30', Status : 'Ready To Serve'},
                    {CustomerName : 'Ankur', DeliveryAddress : 'Netherlands', NoOfItems: '3', Amount : '45', 
                    TotalAmount : '45', Status : 'Order Received'},
                    {CustomerName : 'Carlo', DeliveryAddress : 'Netherlands', NoOfItems: '3', Amount : '45', 
                    TotalAmount : '45', Status : 'Order Received'},
                    {CustomerName : 'Ganesh', DeliveryAddress : 'Netherlands', NoOfItems: '3', Amount : '45', 
                    TotalAmount : '45', Status : 'Order Received'},
                    {CustomerName : 'Kailash', DeliveryAddress : 'Madhya Pradesh', NoOfItems: '3', Amount : '45', 
                    TotalAmount : '45', Status : 'Order Received'},
                    {CustomerName : 'Marco', DeliveryAddress : 'Netherlands', NoOfItems: '3', Amount : '45', 
                    TotalAmount : '45', Status : 'Order Received'},
                    {CustomerName : 'Mili', DeliveryAddress : 'Uttar Pradesh', NoOfItems: '2', Amount : '30', 
                    TotalAmount : '30', Status : 'Order Received'},
                    {CustomerName : 'Pooja', DeliveryAddress : 'Maharashtra', NoOfItems: '2', Amount : '30', 
                    TotalAmount : '30', Status : 'Preparing'}]; 
  

    getOrders(){
        return this.orders.slice();
    }

    getOrder(index : number){
        return this.orders.slice()[index];
    }

    

    orderSelected = new EventEmitter<any>();

}
