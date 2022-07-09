import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { DeleteAdminComponent } from './components/delete-admin/delete-admin.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AdminComponent,
    RegisterAdminComponent,
    UpdateAdminComponent,
    DeleteAdminComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule
    ]
})
export class AdminModule { }
