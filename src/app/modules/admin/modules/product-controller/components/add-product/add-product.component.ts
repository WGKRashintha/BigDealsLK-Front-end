import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../../../../services/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  colorsArray: string[] = [];

  urlsArray: string[] =[];

  sizesArray: string[] =[];

  addProductForm=new FormGroup({
    title:new FormControl(null , [Validators.required]),
    productCode:new FormControl(null , [Validators.required]),
    category:new FormControl(null , [Validators.required]),
    description:new FormControl(null , [Validators.required]),
    colors:new FormControl(null),
    sizes:new FormControl(null),
    urls:new FormControl(null),
    price:new FormControl(null , [Validators.required])
  })

  constructor(private productService:ProductService , private snackBar:MatSnackBar) {}

  ngOnInit(): void {
  }

  addColors(color: any) {
    this.colorsArray?.push(color);
    this.addProductForm.get('colors')?.reset();
  }

  addUrls(url: string) {
    console.log(url);
    this.urlsArray?.push(url);
    this.urlsArray.values();
    this.addProductForm.get('urls')?.reset();
  }

  addSizes(size: string) {
    this.sizesArray?.push(size);
    this.addProductForm.get('sizes')?.reset();
  }

  addProduct() {
    this.productService.add(
      this.addProductForm.get('title')?.value,
      this.addProductForm.get('productCode')?.value,
      this.addProductForm.get('category')?.value,
      this.addProductForm.get('description')?.value,
      this.colorsArray,
      this.sizesArray,
      this.urlsArray,
      this.addProductForm.get('price')?.value
    ).subscribe(response=>{
      console.log(response);
      this.snackBar.open('Successfully added' , 'Close' , {duration:7500});
      this.urlsArray=[];
      this.colorsArray=[];
      this.sizesArray=[];
    }, error => {
      console.log(error);
      this.snackBar.open('Something went wrong !' , 'Close' , {duration:7500});
    })
  }
}
