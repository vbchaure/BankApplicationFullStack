import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id!: number;
  acc: any;
  user1!: number;
  exform!: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private service: AccountServiceService) { }

  ngOnInit() {
    this.acc = new Account();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getAccountById(this.id)
      .subscribe(data => {
        console.log(data);
        this.acc = data;
        this.user1=this.acc.userid; 
      }, error => console.log(error));
    
      this.exform = new FormGroup({
        // 'accid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
        // 'userid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
        'bname' : new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]{3,40}$')]),
        'atype' : new FormControl(null, [Validators.required,Validators.pattern('^(S|C){1}$')]),
        'abalance' : new FormControl(null, [Validators.required,Validators.pattern('^(([0-9]{1,8})|(([0-9]{1,8})\.[0-9]{1,2}))$')]),
          
      })
  }

  updateEmployee() {
    this.service.updateAccount(this.id, this.acc)
      .subscribe(data => {
        console.log(data);
        this.acc = new Account();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate([`show-account/${this.user1}`]);
  }

}
