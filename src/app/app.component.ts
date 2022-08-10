import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { GoogleLoginProvider, SocialAuthService,SocialLoginModule, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankingApp';

  // signinForm!: FormGroup;
  // user: SocialUser | undefined;
  // loggedIn: any;  
  // constructor(private fb: FormBuilder, private authService: SocialAuthService) { }  
  // ngOnInit() {
  //   this.signinForm = this.fb.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });    this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //     console.log(this.user);
  //   });
  // }  
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
  // signOut(): void {
  //   this.authService.signOut();
  // }
}
