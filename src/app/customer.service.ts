import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export default class CustomerService {

  constructor(private router:Router) { }
  customers: any = [
    {id:1, name:'Athira',email:'athira0171@gmail.com', phone:'09038187690', address:"India"},
    {id:2, name:'Ashish Roy',email:'ashishroy@gmail.com',phone:'09038187691' ,address:"India"}
  ];
getCustomers(){
  
  return this.customers;

}

getCustomerById(id){
  for(var i=0;i<this.customers.length;i++)
  {
    if(this.customers[i].id==id){
      return this.customers[i];
    }
  }
  return null;
}
addCustomer(customer){
    customer.id=this.customers.length+1;
    this.customers.push(customer);
    this.getCustomers();

  }
  updateCustomer(customer)
{
  for(var i=0;i<this.customers.length;i++){
    if(this.customers[i].id==customer.id)
    {
      this.customers[i]=customer;
      break;
    }
    else{
      customer.id=this.customers.length+1;
      this.customers.push(customer);
    }
  }
}
 deleteAllCustomer(){
   this.customers=[];
 }
deleteCustomer(customer){
  var list=[];
 for(var i=0;i<this.customers.length;i++)
 {
 if(customer.id!=(this.customers[i].id))
{
  list.push(this.customers[i]);
}
 }
 this.customers=list;
}


}
