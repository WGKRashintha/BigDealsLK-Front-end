import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.scss']
})
export class GlassesComponent implements OnInit {

  allProducts: any[] =[];
  glassProducts: any[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(response=>{
      this.allProducts=response.message;
      console.log(this.allProducts);

      for (let i=0; i<this.allProducts.length; i++){
        if(this.allProducts[i].category==='Sunglass'){
          console.log(this.allProducts[i].productCode);

          this.productService.get(this.allProducts[i].productCode).subscribe(response=>{
            this.glassProducts.push(response.message);
          } , error => {
            console.log(error);
          })
        }
      }
      console.log(this.glassProducts)
    } , error => {
      console.log(error);
    })
  }

}
