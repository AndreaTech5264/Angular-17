import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './add-contact/add-contact.component';

//qui sotto si inseriscono le rotte 
const routes: Routes = [
  {path : "home", component:HomeComponent},
  {path : "about", component:AboutComponent},
  {path : "contact", component:ContactComponent,children:[
    {path:"add",component:AddContactComponent},
    {path:"edit/:id",component:AddContactComponent}
  ]},
  {path: "login", component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
