import { Injectable } from '@angular/core';
import {ProductService} from "./product.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  color:string ='';
  size:string ='';
  title:string='';
  image:string='';
  productCode:string='';
  dataArray: string[]=[];
  products: string[]=[];

  constructor(private productService:ProductService) { }



  setProductData(color:string , size:string , productCode:string){
    this.color=color;
    this.size=size;
    this.productCode=productCode;
  }

  getProductData(){
    return new Array(this.color , this.size , this.productCode) ;
  }

  addItems(){
    this.dataArray=this.getProductData();
    console.log(this.dataArray);
    console.log(this.getTitle(this.dataArray[2]));

  }

  getTitle(productCode:string){
    this.productService.get(productCode).subscribe(response=>{
      this.title=response.message.title;
      console.log(this.title);
    } , error => {
      console.log(error);
    })
    return this.title;
  }

  getImage(productCode:string){
    this.productService.get(productCode).subscribe(response=>{
      this.image=response.message.urls[0];
      console.log(this.image)
    } , error => {
      console.log(error);
    })
    return this.image;
  }
}
