import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { RegisterComponent } from './access/register/register.component';
import { StatusComponent } from './status/status.component';
import { ShopComponent } from './shop/shop.component';

//qui sotto si inseriscono le rotte 
const routes: Routes = [
  {path : "home", component:HomeComponent},
  {path : "about", component:AboutComponent},
  {path : "contact", component:ContactComponent,children:[
    {path:"add",component:AddContactComponent},
    {path:"edit/:id",component:AddContactComponent}
  ]},
  {path: "login", component:LoginComponent},
  {path: "shop",component:ShopComponent},
  {path: "register",component:RegisterComponent},
  {path: "access",loadChildren:()=>import ('./access/access.module').then(opt=>opt.AccessModule)},
  {path:"**",component:StatusComponent} //404 not found
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
