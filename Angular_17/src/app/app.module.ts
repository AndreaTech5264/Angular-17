import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StatusComponent,
    HeaderComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    BrowserAnimationsModule, //aggiunto successivamente perchè è componente standalone
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
