// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RestapiService {

//   constructor(private http:HttpClient) { }

// login(username:string,password:string){
//   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
//   return this.http.get("http://localhost:8086/employees",{headers,responseType: 'text' as 'json'})
// }

//   getUsers() {
//     let username='Santosh'
//     let password='pass1'
//     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
//    return  this.http.get("http://localhost:8086/getEmployees",{headers});
//   }
// }
