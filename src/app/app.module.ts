import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccountListComponent } from './account-list/account-list.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowAccountComponent } from './show-account/show-account.component';
// import { EmpLoginComponent } from './emp-login/emp-login.component';
// import { EmpHomeComponent } from './emp-home/emp-home.component';
import { AccountServiceService } from './account-service.service';
import { UserServiceService } from './user-service.service';
// import {GoogleLoginProvider} from 'lib';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UserComponent,
    AccountComponent,
    CreateAccountComponent,
    AccountListComponent,
    LoginComponent,
    DashboardComponent,
    ShowAccountComponent
    // EmpLoginComponent,
    // EmpHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '600725343070-pqee2aegko26pto8bbt9i1pd4kg2jo0a.apps.googleusercontent.com'
          )
        }
      ],onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig
  },AccountServiceService,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
