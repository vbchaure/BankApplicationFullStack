import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute,Router,NavigationStart} from '@angular/router';
import { User } from '../user';
import { AccountServiceService } from '../account-service.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  totalLength1:any;
  page1:number =1;
  showpost1:any=[];
  accounts:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private service1:AccountServiceService,private router: Router) { }

  ngOnInit(): void {

    // let username='Santosh'
    // let password='pass1'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });,{headers}
    let response1=this.http.get("http://localhost:8086/acc/GetAllAccount");
    response1.subscribe((data)=>{
      this.accounts=data
      this.showpost1=data;
      this.totalLength1=this.showpost1.length;
    });
  }

  public deleteAccount(id:number){
    let resp= this.service1.deleteAccount(id);
    resp.subscribe((data)=> {console.log(data);});
    this.router.navigate(['accounts']);
  }

  updateAccount(id: number){
    this.router.navigate(['acc/update', id]);
  }
}
