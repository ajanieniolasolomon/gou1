import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  email:any;                     // A property for our submitted form
  password:any = '';
  err:any;
  constructor(private fb: FormBuilder,private service:UserService,private router:Router ) { 
    this.rForm = fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      
    });
  }

  ngOnInit() {
  }
  Login(post) {
    this.email = post.email;
    this.password = post.password;
    this.service.emailLogin(this.email,this.password).then((data)=>{
      
     
   
this.router.navigate(['/main']);
    }).catch((error)=>{
this.err=error;


    })
  }
}
