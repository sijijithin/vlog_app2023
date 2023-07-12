import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CreatecontentComponent } from './createcontent/createcontent.component';
import {UpdatecontentComponent } from './updatecontent/updatecontent.component';
import { ViewcontentComponent } from './viewcontent/viewcontent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { 
    path:"",component:MaincontentComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"add",component:CreatecontentComponent
    }, 
    {
      path:"update/:id", component:UpdatecontentComponent
    },
    {
      path:"view/:id",component:ViewcontentComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
