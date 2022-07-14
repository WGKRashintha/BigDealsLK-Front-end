import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {

  allProducts: any[] =[];
  mensProducts: any[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(response=>{
      this.allProducts=response.message;
      console.log(this.allProducts);

      for (let i=0; i<this.allProducts.length; i++){
        if(this.allProducts[i].category==='Men'){
          console.log(this.allProducts[i].productCode);

          this.productService.get(this.allProducts[i].productCode).subscribe(response=>{
            this.mensProducts.push(response.message);
          } , error => {
            console.log(error);
          })
        }
      }
      console.log(this.mensProducts)
    } , error => {
      console.log(error);
    })
  }

}
