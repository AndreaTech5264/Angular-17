import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }
   ProceedLogin(inputdata:any){
    return this.http.post ('https://localhost:44308/User/Authenticate',inputdata); //da rivedere
     
   }
}
