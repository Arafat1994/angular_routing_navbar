import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarCopponentComponent } from './navbar-copponent/navbar-copponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './routing-module.service';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { SkillsCompComponent } from './skills-comp/skills-comp.component';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';
import { AngularProCompComponent } from './angular-pro-comp/angular-pro-comp.component';
import { ReactProCompComponent } from './react-pro-comp/react-pro-comp.component';
import { JavascriptProCompComponent } from './javascript-pro-comp/javascript-pro-comp.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarCopponentComponent,
    HomeCompComponent,
    SkillsCompComponent,
    AboutCompComponent,
    ContactCompComponent,
    AngularProCompComponent,
    ReactProCompComponent,
    JavascriptProCompComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
