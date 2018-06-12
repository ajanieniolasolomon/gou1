
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MainComponent } from './main/main.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';
const userRoutes: Routes = [
    {
        path:'',
        component:DashbordComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },{
        path:'main',
        component: MainComponent 
    },{
        path:'redirect',
        component:AuthRedirectComponent
    }
  
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);