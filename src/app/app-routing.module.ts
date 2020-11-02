import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Quiz1Component} from './quiz1/quiz1.component';
import{HostComponent}from './host/host.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 { path: '', redirectTo:"/login" ,pathMatch:"full"},
 {path:'login', component:LoginComponent},
 { path: 'quiz1', component:Quiz1Component },
{path:'host',component:HostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
