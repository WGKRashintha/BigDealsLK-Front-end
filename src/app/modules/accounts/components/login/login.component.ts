import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";

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

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  login() {

  }
}
