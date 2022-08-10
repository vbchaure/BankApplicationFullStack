import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute,Router,NavigationStart} from '@angular/router';
import { User } from '../user';
import { AccountServiceService } from '../account-service.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { Account } from '../account';
import { of } from 'rxjs';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css']
})
export class ShowAccountComponent implements OnInit {

  totalLength1:any;
  page1:number =1;
  showpost1:any=[];
  accounts:any;
  id!: number;
  acc: Account=new Account();
  constructor(private http:HttpClient,private route:ActivatedRoute,private service1:AccountServiceService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.acc.userid=this.id;
    let response1=this.http.get(`http://localhost:8086/acc/GetAllAccountByID/${this.id}`);
    response1.subscribe((data)=>{
      this.accounts=data;
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
