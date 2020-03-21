import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {ButtonModule} from 'primeng/button';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DocumentComponent } from './document/document.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CabinetComponent } from './cabinet/cabinet.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {FileUploadModule} from 'primeng/fileupload';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'home/:Userid',component:HomeComponent},
  {path:'profile/:Userid',component:ProfileComponent},
  {path:'cabinet/:Filecabinetid',component:CabinetComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CabinetComponent,
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
    DialogModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    MenuModule,
    FileUploadModule,
    RouterModule.forRoot(routes),
    
   

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {  }
