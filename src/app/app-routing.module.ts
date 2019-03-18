import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListcustomerComponent} from'./listcustomer/listcustomer.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {CustomerComponent} from './customer/customer.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
  import {EditcustomerComponent} from'./editcustomer/editcustomer.component';
  import { StudentComponent } from './student/student.component'
  import {ListStudentComponent} from './list-student/list-student.component';
  import {AddStudentComponent} from './add-student/add-student.component';
  import {EditStudentComponent} from './edit-student/edit-student.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'about',component:AboutComponent},
  {path:'customer',component:CustomerComponent},
  {path:'list-customer',component:ListcustomerComponent},
  {path:'add-customer',component:AddcustomerComponent},
  {path:'editcustomer/:id',component:EditcustomerComponent},
  {path:'student',component:StudentComponent},
  {path:'list-student',component:ListStudentComponent},
  {path:'add-student',component:AddStudentComponent},
  {path: 'edit-student/:rollno', component:EditStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
