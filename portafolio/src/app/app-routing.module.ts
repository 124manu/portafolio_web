import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/inicio/home.component';


const routes : Routes=[
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent}
 
 ]


@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
