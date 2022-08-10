import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id!: number;
  user: any;
  exform!: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,
    private service: UserServiceService) { }

    ngOnInit() {
      this.user = new User();
  
      this.id = this.route.snapshot.params['id'];
      
      this.service.getUserById(this.id)
        .subscribe(data => {
          console.log(data);
          this.user = data;
        }, error => console.log(error));
      
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
            'gender' : new FormControl(null, [Validators.required,Validators.pattern('^(M|F){1}$')]),
            'dob' : new FormControl(null, [Validators.required,Validators.pattern('^(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$')]),
        })
    }

  updateEmployee() {
    this.service.updateUser(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/users']);
  }

}
