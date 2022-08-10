import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService,SocialLoginModule, SocialUser } from '@abacritt/angularx-social-login';

declare function showFunction() :any;
declare function hideFunction() :any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // ngOnInit(): void {}

  // constructor(private router: Router,private socialAuthService: SocialAuthService) {}
//   signInHandler(): void {
//     this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
//       localStorage.setItem('google_auth', JSON.stringify(data));
//       this.router.navigateByUrl('/dashboard').then();
//     },(error:any) => {
//   console.log(error);
// });
  // }
  

  // signInHandler(): void 
  // {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //   .then(() => this.router.navigate(['dashboard']), (error:any) => {
  //     console.log(error);
  //   });//
  // }
  signinForm!: FormGroup;
  user: SocialUser | undefined;
  loggedIn: any;  
  constructor(private fb: FormBuilder, private authService: SocialAuthService) { }  
  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      showFunction();
    });
  }  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
    hideFunction();
  }
}
