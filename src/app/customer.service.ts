import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export default class CustomerService {

  constructor(private router:Router,private http: HttpClient) { }
  private customerUrl = 'http://localhost:3000/api/customers';
  customers: any = [
    {id:1, name:'Athira',email:'athira0171@gmail.com', phone:'09038187690', address:"India"},
    {id:2, name:'Ashish Roy',email:'ashishroy@gmail.com',phone:'09038187691' ,address:"India"}
  ];
getCustomers(){
  
  return this.customers;

}
getRemoteCustomers(): Observable<[]>{
  return this.http.get<[]>(this.customerUrl); 		
}

deleteRemoteCustomer(customer){
  return this.http.delete(this.customerUrl+"/"+customer.id); 		
}
addRemoteCustomer(customer):Observable<any>{
  return this.http.post(this.customerUrl,customer);
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
// addCustomer(customer){
//     customer.id=this.customers.length+1;
//     this.customers.push(customer);
//     this.getCustomers();

//   }
//   updateCustomer(customer)
// {
//   for(var i=0;i<this.customers.length;i++){
//     if(this.customers[i].id==customer.id)
//     {
//       this.customers[i]=customer;
//       break;
//     }
//     else{
//       customer.id=this.customers.length+1;
//       this.customers.push(customer);
//     }
//   }
// }
 
updateRemoteCustomer(customer):Observable<any>{
  return this.http.put(this.customerUrl + "/"+customer.id,customer);
}

getRemoteCustomerById(id):Observable<any>{
 return this.http.get<[]>(this.customerUrl + "/"+id);
}




deleteAllCustomer(){
   this.customers=[];
 }
// deleteCustomer(customer){
//   var list=[];
//  for(var i=0;i<this.customers.length;i++)
//  {
//  if(customer.id!=(this.customers[i].id))
// {
//   list.push(this.customers[i]);
// }
//  }
//  this.customers=list;
// }


}
