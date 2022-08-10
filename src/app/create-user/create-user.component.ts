import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router,NavigationStart} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User=new User();
  users:any;
  message:any;
  exform!: FormGroup;

  constructor(private service:UserServiceService,private router: Router) { }
// ^[0-9]+$
  ngOnInit() {
    this.exform = new FormGroup({
      // 'userid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'name' : new FormControl(null, [Validators.required,Validators.pattern('^[A-Za-z]{3,40}$')]),
      'email' : new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-z]([a-zA-Z0-9][\.+\-+\_]){0,5}[a-zA-Z0-9]{2,10}@([a-zA-Z0-9]{2,8}\.){1,4}[a-zA-Z0-9]{2,5}$')]),
      'mobile' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^[9+8+7+6][0-9]{9}$')
        ]),
        'smobile' : new FormControl(
          null,
          [
            Validators.required,
            Validators.pattern('^[9+8+7+6][0-9]{9}$')
          ]),
        'gender' : new FormControl(null, [Validators.required]),//,Validators.pattern('^(M|F){1}$')
        'dob' : new FormControl(null, [Validators.required,Validators.pattern('^(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$')]),
    })
  }
  
  public findUserById(id:number){
    let resp= this.service.getUserById(id);
    resp.subscribe((data)=>this.users=data);
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['users']);
  }
}
