import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl=environment.baseUrl

  constructor(private http:HttpClient) { }

  register(fullName:string , email:string , dob:string , address:string , contact:string , nic:string):Observable<any>{
    return this.http.post(this.baseUrl + 'admin/register' , {
      fullName:fullName,
      email:email,
      dob:dob,
      address:address,
      contact:contact,
      nic:nic
    })
  }

  update(name:string , email:string , dob:string , address:string , contact:string , nic:string):Observable<any>{
    return this.http.put(this.baseUrl + 'admin/update' , {
      newName:name,
      email:email,
      dob:dob,
      address:address,
      contact:contact,
      nic:nic
    })
  }

  getAdmin(fullName:string):Observable<any>{
    return this.http.get(this.baseUrl + 'admin/get' , {headers : {fullName:fullName}})
  }

  delete(fullName:string):Observable<any>{
    return this.http.delete(this.baseUrl + 'admin/delete' , {body:{fullName:fullName}})
  }

  login(userName:string , password:string):Observable<any>{
    return this.http.post(this.baseUrl + 'admin/login' , {
      fullName:userName,
      password:password
    })
  }
}
