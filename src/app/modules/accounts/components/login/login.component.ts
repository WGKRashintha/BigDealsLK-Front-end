import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {TokenService} from "../../../../services/token.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl(null , [Validators.required]),
    password:new FormControl(null , [Validators.required])
  })

  constructor(private userService:UserService , private tokenService:TokenService, private snackBar:MatSnackBar , private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response=>{
      console.log(response);
      this.tokenService.createToken(response.token);

      this.router.navigate(['/home']).then(responseData=>{
        console.log(response.token);
        localStorage.setItem('email' , this.loginForm.get('email')?.value);
        this.snackBar.open(response.message , 'Close' , {duration:3500});
      });
    }, error => {
      console.log(error);
      this.snackBar.open('Invalid' , 'Close' , {duration:5000});
    })
  }
}
