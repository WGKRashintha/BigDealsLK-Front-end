import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpFrom=new FormGroup({
    userName:new FormControl(null , [Validators.required]),
    email:new FormControl(null , [Validators.email , Validators.required]),
    password:new FormControl(null , [Validators.required]),
    passwordRepeat:new FormControl(null , [Validators.required]),
    address:new FormControl(null , [Validators.required]),
    contact:new FormControl(null , [Validators.required])
  })

  constructor(private userService:UserService , private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  signUp() {
    if(
      this.signUpFrom.get('userName')?.invalid ||
      this.signUpFrom.get('email')?.invalid ||
      this.signUpFrom.get('password')?.invalid ||
      this.signUpFrom.get('passwordConformed')?.invalid ||
      this.signUpFrom.get('address')?.invalid ||
      this.signUpFrom.get('contact')?.invalid
    ){
      this.snackBar.open('Empty input detected' , 'Close' , {duration:7500});
      return;
    }

    if(this.signUpFrom.get('password')?.value===this.signUpFrom.get('passwordRepeat')?.value){
      this.userService.add(
        this.signUpFrom.get('userName')?.value,
        this.signUpFrom.get('email')?.value,
        this.signUpFrom.get('password')?.value,
        this.signUpFrom.get('address')?.value,
        this.signUpFrom.get('contact')?.value
      ).subscribe(response=>{
        console.log(response);
        this.snackBar.open('Registration is succeeded' , 'Close' , {duration:500});
      } , error => {
        console.log(error)
      })
    }else{
      this.snackBar.open('Passwords should be same' , 'Close' , {duration:3500});
      return;
    }
  }
}
