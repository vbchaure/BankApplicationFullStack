// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { RestapiService } from '../restapi.service';

// @Component({
//   selector: 'app-emp-login',
//   templateUrl: './emp-login.component.html',
//   styleUrls: ['./emp-login.component.css']
// })
// export class EmpLoginComponent implements OnInit {

//   username!: string;
//   password!: string;
//   message: any

//   constructor(private service: RestapiService,private router:Router) { }

//   ngOnInit() {
//   }

//   doLogin() {
//     let resp = this.service.login(this.username, this.password);
//     resp.subscribe(data => {
//       this.message = data;
//      this.router.navigate(["/emphome"])
//     });
//   }
// }
