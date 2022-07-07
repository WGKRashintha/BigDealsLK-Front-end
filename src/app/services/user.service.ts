import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  login(userName:String , password:String):Observable<any>{
    return this.http.post(this.baseUrl + 'user/login' , {
      userName:userName,
      password:password
    });
  }

  add(userName:String, email:String, password:String, address:String , contact:String):Observable<any>{
    return this.http.post(this.baseUrl + 'user/add' , {
      userName:userName,
      email:email,
      password:password,
      address:address,
      contact:contact
    });
  }
}
