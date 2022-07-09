import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../services/admin.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {

  registerForm=new FormGroup({
    fullName:new FormControl(null , [Validators.required]),
    email:new FormControl(null , [Validators.email , Validators.required]),
    password:new FormControl(null , [Validators.required]),
    dob:new FormControl(null , [Validators.required]),
    address:new FormControl(null , [Validators.required]),
    contact:new FormControl(null , [Validators.required]),
    nic:new FormControl(null , [Validators.required])
  })

  constructor(private adminService:AdminService , private router:Router , private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  register() {
    this.adminService.register(
      this.registerForm.get('fullName')?.value,
      this.registerForm.get('email')?.value,
      this.registerForm.get('dob')?.value,
      this.registerForm.get('address')?.value,
      this.registerForm.get('contact')?.value,
      this.registerForm.get('nic')?.value
    ).subscribe(response=>{
      console.log(response);

      this.router.navigate(['/admin']).then(responseData=>{
        console.log(responseData)
        this.snackBar.open('Registration is succeeded' , 'Close' , {duration:7500});
      });
    } , error => {
      console.log(error);
      this.snackBar.open('Something went wrong' , 'Close' , {duration:7500});
    })
  }
}
