import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EmpHomeComponent } from './emp-home/emp-home.component';
// import { EmpLoginComponent } from './emp-login/emp-login.component';
import { LoginComponent } from './login/login.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path:'emplogin',component:EmpLoginComponent
  // },
  // {
  //   path:'emphome',component:EmpHomeComponent
  // },
  {
    path:'users',component:UserListComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'createuser',component:CreateUserComponent
  },
  {
    path:'createaccount/:id',component:CreateAccountComponent
  },
  { 
    path: 'update/:id', component: UserComponent 
  },
  {
    path: 'show-account/:id', component: ShowAccountComponent 
 },
  {
     path: 'acc/update/:id', component: AccountComponent 
  },
  {
    path: 'accounts', component: AccountListComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
