import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {ButtonModule} from 'primeng/button';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DocumentComponent } from './document/document.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'home/:Userid',component:HomeComponent},
  {path:'profile',component:ProfileComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, HomeComponent,
    LoginComponent,
    SignUpComponent,
   
    FooterComponent,
    ProfileComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    HttpClientModule,
    RadioButtonModule,
    TabMenuModule,
    ButtonModule,
   RouterModule.forRoot(routes)
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
