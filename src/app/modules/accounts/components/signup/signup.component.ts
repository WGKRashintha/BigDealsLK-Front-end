import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm=new FormGroup({
    userName:new FormControl(null , [Validators.required]),
    email:new FormControl(null , [Validators.email , Validators.required]),
    password:new FormControl(null , [Validators.required]),
    passwordRepeat:new FormControl(null , [Validators.required]),
    address:new FormControl(null , [Validators.required]),
    contact:new FormControl(null , [Validators.required])
  })

  constructor(private userService:UserService , private snackBar:MatSnackBar , private router:Router) { }

  ngOnInit(): void {
  }

  signUp() {
    if(this.signUpForm.get('password')?.value===this.signUpForm.get('passwordRepeat')?.value){

      /*if(
        this.signUpForm.get('userName')?.invalid ||
        this.signUpForm.get('email')?.invalid ||
        this.signUpForm.get('password')?.invalid ||
        this.signUpForm.get('passwordRepeat')?.invalid ||
        this.signUpForm.get('address')?.invalid ||
        this.signUpForm.get('contact')?.invalid
      ){
        this.snackBar.open('Empty input detected' , 'Close' , {duration:7500});
        return;
      }*/

      this.userService.add(
        this.signUpForm.get('userName')?.value,
        this.signUpForm.get('email')?.value,
        this.signUpForm.get('password')?.value,
        this.signUpForm.get('address')?.value,
        this.signUpForm.get('contact')?.value
      ).subscribe(response=>{
        console.log(response);

        this.router.navigate(['/accounts/login']).then(responseData=>{
          console.log(responseData)
          this.snackBar.open('Registration is succeeded' , 'Close' , {duration:7500});
        });
      } , error=>{
        console.log(error)
      })
    }else{
      this.snackBar.open('Passwords should be same' , 'Close' , {duration:7500});
      return;
    }
  }
}
