import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UserService } from './user.service';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import {userRouting} from './user.routing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { JsonpModule } from '@angular/http';
import { MainComponent } from './main/main.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';

export const coin={apiKey:'IjjarNtQb9mvGR4P',apiSecret:'5Hhf8jBgIKawTPD3KNG1AoBvt7BukWn0'}

export const firebaseConfig = {
  apiKey: "AIzaSyCaJVcz2kUbpgMz0uGdSCJGAS-eatIEeF0",
  authDomain: "ajax-a642a.firebaseapp.com",
  databaseURL: "https://ajax-a642a.firebaseio.com",
  projectId: "ajax-a642a",
  storageBucket: "ajax-a642a.appspot.com",
  messagingSenderId: "725788386185"
};
@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
    AngularFirestoreModule,
    HttpClientModule,
    userRouting ,FormsModule, ReactiveFormsModule  
,AngularFireAuthModule ,
AngularFireDatabaseModule,
JsonpModule ,
HttpClientJsonpModule
  ],
  declarations: [LoginComponent, RegisterComponent, DashbordComponent, MainComponent, AuthRedirectComponent],
  providers: [UserService,JsonpModule ]
})
export class UserModule { }
