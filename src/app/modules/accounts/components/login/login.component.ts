import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {TokenService} from "../../../../services/token.service";
import {Route, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    userName:new FormControl(null ,[Validators.required]),
    password:new FormControl(null , [Validators.required])
  })

  constructor(private userService:UserService , private tokenService:TokenService , private router:Router , private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(
      this.loginForm.get('userName')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response=>{
      this.tokenService.createToken(response.token);
      this.snackBar.open('Logged in' , 'Close' , {duration:3500});
      this.router.navigate(['/home']);
    } , error => {
      console.log(error);
      this.snackBar.open('Invalid' , 'Close' , {duration:5000});
    })
  }
}
