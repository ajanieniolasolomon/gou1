import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import {flatMap}  from 'rxjs/operators'
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/merge';
import {Observable} from 'rxjs/Rx'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private loading: boolean = false;
  private results: Observable< LoginResponse[]>;
  rForm: FormGroup;
  post:any;                     
  email:any = '';
  password:any = '';
uid='';
  selected: any;
  title = 'crypto bazaar';
  
  isClassVisible = false; 
  name = '';
  account_id = '';
  account_name = '';
  constructor(private http: HttpClient,private fb: FormBuilder,private service:UserService,private router:Router,  private afs: AngularFirestore) { 
    this.rForm = fb.group({
      'email' : [null, Validators.required],
       
      
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],

    });


  }

  ngOnInit() {
  
  
  }
  
  register(post) {
   /* this.email = post.email;
    this.password= post.password;
  
this.service.emailSignUp(this.email,this.password).then(user=>{
  this.service.saveUserInfoFromForm(this.email,this.password,user.uid).then(()=>{
    this.router.navigate(['']);
  }).catch((err)=>{
    console.log(err);
  })
}).catch((errs)=>{
  console.log(errs);
})
*/

      

  }
 

}
class LoginResponse {
  constructor(private guid: string,private address: string,private warning:string){

  } 
}