import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AccountsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AccountsModule { }
