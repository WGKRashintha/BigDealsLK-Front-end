import { Injectable } from '@angular/core';
import {ProductService} from "./product.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseUrl=environment.baseUrl;

  color:string ='';
  size:string ='';
  title:string='';
  url:string='';
  price:number=0;
  productCode:string='';

  email:string='';

  constructor(private productService:ProductService , private http:HttpClient , /*private snackBar:MatSnackBar*/) { }



  setProductData(title:string , color:string , size:string , url:string , price:number){
    this.title=title;
    this.color=color;
    this.size=size;
    this.url=url;
    this.price=price

    this.email=<string>localStorage.getItem('email');

    this.add(this.email , this.title , this.color , this.size , this.url , this.price).subscribe(response=>{
      console.log(response);
      /*this.snackBar.open('Added to the Card' , 'Close' , {duration:5000});*/
    } , error => {
      console.log(this.email)
      console.log(error);
    })
  }

  add(email:string , title:string , color:string , size:string , url:string , price:number):Observable<any>{
    return this.http.post(this.baseUrl + 'cart/add' , {
      email:email,
      title:title,
      price:price,
      color:color,
      size:size,
      url:url
    })
  }

  getAll(email:string):Observable<any>{
    return this.http.get(this.baseUrl + 'cart/getAll', {headers:{email:email}})
  }

  delete(title:string):Observable<any>{
    return this.http.delete(this.baseUrl + 'cart/delete' , {body:{title:title}})
  }
  deleteAll(email:string):Observable<any>{
    return this.http.delete(this.baseUrl + 'cart/deleteAll' , {headers:{email:email}})
  }
}
