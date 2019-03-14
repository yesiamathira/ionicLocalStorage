import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  customer:any={
    name:"",
    email:"",
    phone:"",
    address:"",
};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    //this.list=this.customerService.getCustomers();
  }
  addCustomer(customer){
    this.customerService.addCustomer(customer);
    this.customerService.getCustomers();
   
  }
  
}