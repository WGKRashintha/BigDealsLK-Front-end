import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl(null , [Validators.required]),
    password:new FormControl(null , [Validators.required])
  })

  constructor(private adminService:AdminService , private tokenService:TokenService , private router:Router , private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    this.adminService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response=>{
      console.log(response);
      this.tokenService.createToken(response.token);
      this.snackBar.open(response.message , 'Close' , {duration:3500});

      this.router.navigate(['admin/register-admin']).then(responseData=>{
        console.log(response.token)
        this.snackBar.open(response.message , 'Close' , {duration:3500});
      });
    }, error => {
      console.log(error);
      this.snackBar.open('Invalid' , 'Close' , {duration:5000});
    })
  }
}
