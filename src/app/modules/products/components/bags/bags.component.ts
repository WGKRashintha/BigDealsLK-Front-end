import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {

  allProducts: any[] =[];
  bagProducts: any[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(response=>{
      this.allProducts=response.message;
      console.log(this.allProducts);

      for (let i=0; i<this.allProducts.length; i++){
        if(this.allProducts[i].category==='Bag'){
          console.log(this.allProducts[i].productCode);

          this.productService.get(this.allProducts[i].productCode).subscribe(response=>{
            this.bagProducts.push(response.message);
          } , error => {
            console.log(error);
          })
        }
      }
      console.log(this.bagProducts)
    } , error => {
      console.log(error);
    })
  }

}
