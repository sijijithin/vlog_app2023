import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = {
    username: "",
    email: "",
    password: ''
  };

  constructor(private router: Router, private userService: UserService) { }
  onSignUp() {

    this.userService.getAllUser().subscribe({
      next: (allUsers: any) => {
        if (allUsers) {
          this.userService.addUser({ ... this.user, id: allUsers.length + 1 }).subscribe({
            next: (user) => {
              alert("Registeration Successfull !!!");
              this.router.navigateByUrl("login");
            },
            error: (userErr) => {
              alert("Registration Failed !!!")
            }
          });
        }

      },
      error:(AllUserErr)=> {
        alert("Registration Failed !!!")
      }
    })
  }
}
