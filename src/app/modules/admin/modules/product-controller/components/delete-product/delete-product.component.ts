import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../../../services/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  colorsArray: string[] | undefined

  urlsArray: string[] | undefined

  sizesArray: string[] | undefined

  deleteProductForm=new FormGroup({
    title:new FormControl(null),
    productCode:new FormControl(null),
    description:new FormControl(null),
    colors:new FormControl(null),
    sizes:new FormControl(null),
    urls:new FormControl(null),
    price:new FormControl(null)
  })

  constructor(private productService:ProductService , private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  getProduct(productCode: string) {
    this.productService.get(productCode).subscribe(response=>{
      console.log(response);
      this.deleteProductForm.patchValue({
        title:response.message.title,
        description:response.message.description,
        color:response.message.color,
        sizes:response.message.sizes,
        urls:response.message.urls,
        price:response.message.price
      })
      this.colorsArray=response.message.color;
      this.sizesArray=response.message.sizes;
      this.urlsArray=response.message.urls;
    }, error => {
      console.log(error);
      if(error.status==404){
        this.snackBar.open('Product Not Found' , 'Close' , {duration:3500});
      }
    })
  }

  delete(productCode: string){
    this.productService.delete(productCode).subscribe(response=>{
      console.log(response);
      this.snackBar.open('Successfully deletes !' , 'Close' , {duration:7500});
    }, error => {
      console.log(error);
      this.snackBar.open('Something went wrong !' , 'Close' , {duration:7500});
    })
  }
}

