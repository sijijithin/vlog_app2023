import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  

constructor(private router:Router, private userservice:UserService){}

  isuserloggedin():any{

return this.userservice.isLoggedIn();

  }

  logout(){
    sessionStorage.clear();
    alert("Logout Successfully");
  
    
  }
}
