import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = "https://vlog-server-api.onrender.com";

  constructor( private http: HttpClient) { }

   isLoggedIn(){

    const user =sessionStorage.getItem('loggedInUser')|| "";
    return user && JSON.parse(user)? true:false
   }
   getAllUser(){
    return this.http.get(`${this.base_url}/users`);
   }
   getUser(username:string){
return this.http.get(`${this.base_url}/users?username=${username}`);
   }

   addUser(user: User){
    return this.http.post(`${this.base_url}/users`,user);
   }
}
