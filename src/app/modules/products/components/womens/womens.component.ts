import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.scss']
})
export class WomensComponent implements OnInit {

  allProducts: any[] =[];
  womensProducts: any[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(response=>{
      this.allProducts=response.message;
      console.log(this.allProducts);

      for (let i=0; i<this.allProducts.length; i++){
          if(this.allProducts[i].category==='Women'){
          console.log(this.allProducts[i].productCode);

          this.productService.get(this.allProducts[i].productCode).subscribe(response=>{
            this.womensProducts.push(response.message);
          } , error => {
            console.log(error);
          })
        }
      }
      console.log(this.womensProducts)
    } , error => {
      console.log(error);
    })
  }

}
