import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../../../services/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  colorsArray: string[] =[]

  urlsArray: string[] =[]

  sizesArray: string[] =[]

  updateProductForm=new FormGroup({
    title:new FormControl(null),
    productCode:new FormControl(null),
    description:new FormControl(null),
    colors:new FormControl(null),
    sizes:new FormControl(null),
    urls:new FormControl(null),
    price:new FormControl(null)
  })

  constructor(private productService:ProductService , private snackBar:MatSnackBar , private router:Router) { }

  ngOnInit(): void {
  }

  getProduct(productCode: string) {
    this.productService.get(productCode).subscribe(response=>{
      console.log(response);
      this.updateProductForm.patchValue({
        title:response.message.title,
        description:response.message.description,
        colors:response.message.colors,
        sizes:response.message.sizes,
        urls:response.message.urls,
        price:response.message.price
      })
    } , error => {
      console.log(error);
      if(error.status==404){
        this.snackBar.open('Product Not Found' , 'Close' , {duration:3500});
      }
    })
  }

  addColors(color: string) {
    this.colorsArray.push(color);
  }

  addUrls(url: string) {
    this.urlsArray?.push(url);
  }

  addSizes(size: string) {
    this.sizesArray?.push(size);
  }

  update(productCode:string) {
    this.productService.update(
      productCode,
      this.updateProductForm.get('title')?.value,
      this.updateProductForm.get('description')?.value,
      this.colorsArray,
      this.sizesArray,
      this.urlsArray,
      this.updateProductForm.get('price')?.value
    ).subscribe(response=>{
      console.log(response);
      this.snackBar.open('Successfully updated !' , 'Close' , {duration:7500});
    } , error => {
      console.log(error);
      this.snackBar.open('Something went wrong !' , 'Close' , {duration:7500});
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['admin'])
  }
}
