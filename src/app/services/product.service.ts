import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl=environment.baseUrl

  constructor(private http:HttpClient) { }

  add(title: string, productCode: string, description: string, colors: string[] | undefined, sizes: string[] | undefined, urls: string[] | undefined, price: string):Observable<any>{
    return this.http.post(this.baseUrl + 'product/add' , {
      title:title,
      productCode:productCode,
      description:description,
      colors:colors,
      sizes:sizes,
      url:urls,
      price:price
    })
  }

  get(productCode:string):Observable<any>{
    return this.http.get(this.baseUrl + 'product/get' , {headers : {productCode:productCode}});
  }

  getAll():Observable<any>{
    return this.http.get(this.baseUrl + 'product/getAll');
  }

  update(title: string, description: string, colors: string[] | undefined, sizes: string[] | undefined, urls: string[] | undefined, price: string):Observable<any>{
    return this.http.put(this.baseUrl + 'product/update' , {
      title:title,
      description:description,
      colors:colors,
      sizes:sizes,
      urls:urls,
      price:price
    })
  }

  delete(productCode:string):Observable<any>{
    return this.http.delete(this.baseUrl + 'product/delete' , {body:{productCode:productCode}})
  }
}
