import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import { Routes, RouterModule} from '@angular/router';
const appRoutes:Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'sing-up',component:SignUpComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
