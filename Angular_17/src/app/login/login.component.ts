import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../Material-module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule,MaterialModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor () {}
  ngOnInit(): void {
  }
  ProceedLogin(logindata:any){
    console.log(logindata);
  }
}



