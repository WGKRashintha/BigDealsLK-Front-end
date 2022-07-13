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

  register(fullName:string , email:string , password:string , dob:string , address:string , contact:string , nic:string):Observable<any>{
    return this.http.post(this.baseUrl + 'admin/register' , {
      fullName:fullName,
      email:email,
      password:password,
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

  getAdmin(email:string):Observable<any>{
    return this.http.get(this.baseUrl + 'admin/get' , {headers : {email:email}})
  }

  delete(email:string):Observable<any>{
    return this.http.delete(this.baseUrl + 'admin/delete' , {headers:{email:email}})
  }

  login(email:string , password:string):Observable<any>{
    return this.http.post(this.baseUrl + 'admin/login' , {
      email:email,
      password:password
    })
  }
}
