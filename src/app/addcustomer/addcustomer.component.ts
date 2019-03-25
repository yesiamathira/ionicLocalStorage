import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';
import {Router} from '@angular/router';
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

  constructor(private customerService: CustomerService,private router:Router) { }

  ngOnInit() {
    //this.list=this.customerService.getCustomers();
  }
  // addCustomer(customer){
  //   this.customerService.addCustomer(customer);
  //   this.customerService.getCustomers();
   
  // }
  addCustomer(customer){
  	this.customerService.addRemoteCustomer(customer).subscribe(()=>{this.router.navigate(['/list-customer']);});
  }
}