import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';
import { ActivatedRoute,Router,NavigationStart} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  acc: Account=new Account();
  accounts:any;
  message:any;
  id!: number;
  exform!: FormGroup;
  constructor(private service:AccountServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.acc.userid=this.id;
    console.log(this.id);
    this.exform = new FormGroup({
      // 'accid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      // 'userid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'bname' : new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]{3,40}$')]),
      'atype' : new FormControl(null, [Validators.required,Validators.pattern('^(S|C){1}$')]),
      'abalance' : new FormControl(null, [Validators.required,Validators.pattern('^(([0-9]{1,8})|(([0-9]{1,8})\.[0-9]{1,2}))$')]),
        
    })
  }

  onSubmit(){
    this.service.doRegistration(this.acc,this.id).subscribe( data =>{
      this.goToAccountList();
    }
    , error => console.log(error));
  }

  goToAccountList(){
    this.router.navigate(['/accounts']);
  }
}
