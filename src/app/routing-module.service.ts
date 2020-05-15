import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeCompComponent } from './home-comp/home-comp.component';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { SkillsCompComponent } from './skills-comp/skills-comp.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';
import { AngularProCompComponent } from './angular-pro-comp/angular-pro-comp.component';
import { ReactProCompComponent } from './react-pro-comp/react-pro-comp.component';
import { JavascriptProCompComponent } from './javascript-pro-comp/javascript-pro-comp.component';

const routes: Routes =
 [
   {path:'' , component:HomeCompComponent } , 
   {path:'about' , component:AboutCompComponent } , 
   {path:'skills' , component:SkillsCompComponent } , 
   {path:'contact' , component:ContactCompComponent } , 
   {path:'angular_pro' , component:AngularProCompComponent } , 
   {path:'react_pro' , component:ReactProCompComponent } , 
   {path:'javascript_pro' , component:JavascriptProCompComponent } , 
 ]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }