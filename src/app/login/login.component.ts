import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj:any={
    username:"",
    password:""
  };

isloggedin:boolean=false;
constructor(private userService:UserService , private router:Router){}


  ngOnInit(): void {
     
  }

Onlogin(){
  this.userService.getUser(this.loginObj.username).subscribe({
    next:(res:any)=>{

    if(res[0].username===this.loginObj.username && res[0].password=== this.loginObj.password){
      sessionStorage.setItem('loggedInUser',JSON.stringify(this.loginObj));
   this.isloggedin=true
      this.router.navigate(["/"]);
    }
    else{
      alert("The Username and Password doesnt match");
    }
    
    },
    error:(err:any)=>{
      alert("Login Failed");
    }
  });
}

}
 
