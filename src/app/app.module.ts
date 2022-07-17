import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componenets/home/home.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpManagerInterceptor} from "./interceptors/http-manager.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:HttpManagerInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
