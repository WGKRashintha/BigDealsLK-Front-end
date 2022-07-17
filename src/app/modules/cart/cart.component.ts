import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: string[] =[];
  title: string[] =[];

  constructor(private shared:SharedService , private productService:ProductService) { }

  ngOnInit(): void {
  }


  /*someClass = (() => {
    console.log(this.products[0]);
  })();*/

}
