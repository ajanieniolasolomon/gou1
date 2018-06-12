import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import { Jsonp, Response,URLSearchParams,Headers,RequestOptions} from '@angular/http';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class UserService {
  user:Observable<firebase.User>;
  authState: any = null;
  token:string = '';
  constructor(
    public afAuth: AngularFireAuth,
    private router:Router,
    private db: AngularFireDatabase,
    private http:HttpClient,
    private afs: AngularFirestore,
    private jsonp: Jsonp,
    
  ) { 
   this.user=this.afAuth.authState;
   this.token = '';
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  emailSignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      
  }
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     
  }
  signOut(): void {
    this.afAuth.auth.signOut();
   
  }
  CreateWallet(username:string,password:string){
  //let name=username createHmac("sha256", apiSecret)
  
}


  
  SendWallet(amount,password,to,from,fee,guid){
    
    
  }
  saveUserInfoFromForm(email,password,user_id){
    //save guid,email,password
   return this.afs.collection('user').add({'email':email,'password':password,'user_id':user_id});
  
  }
login(){
  const popup=window.open('http://localhost:8010/ajax-a642a/us-central1/redirect', '_blank', 'height=700,width=800');

}
customSignIn(token) {
  return this.afAuth.auth.signInWithCustomToken(token).then(() => window.close() )
}
// Used for outbound requests
getIdToken() {
  return this.afAuth.auth.currentUser.getIdToken()
}
startAuth : any = () => {
  var self = this; 
  return new Promise((resolve, reject) => {
    var url = 'https://www.coinbase.com/oauth/authorize?client_id=a3a85ea7eb3d3f26a568f0ffacca2464a5c736a601721f7a07c963d71e67f168&redirect_uri=http://localhost:3000/callback&response_type=code&scope=wallet:user:read+wallet:accounts:read';
    var name = 'CryptoBazaar';
    var params = 'width=800,height=600';
    var popup = window.open(url , name , params ); 
    window.addEventListener('message' , (msg) => {
      if(msg.data) {
         self.setToken(msg.data); 
         resolve(true); 
      }
      else {
        reject(false);
      }
    })
  })


  }

  setToken = (token) => {
    this.token = token; 
  }


  getToken = () => {
    return this.token; 
  }
  getUser: any = () => {
    return new Promise( ( resolve , reject ) => {
      this.http.get('http://localhost:3000/user?token='+this.getToken()).subscribe(data => {
        console.log(data); 
        resolve(data); 
      })
    });
  }
  getAccounts: any = () => {
    return new Promise( (resolve , reject) => {
      this.http.get('http://localhost:3000/accounts?token='+this.getToken()).subscribe(data => {
        console.log(data); 
        resolve(data); 
      })
    })
  }

}

 class LoginResponse {
  constructor(private guid: string,private address: string,private warning){

  }  
  }
  class SearchItem {
    constructor(public email: string,
                public id_customer: string,
                ) {
    }
  }