import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private email:string='';
  titles:string[]=[];
  colors:string[]=[];
  sizes:string[]=[];
  urls:string[]=[];
  price:number=0;

  constructor(private shared:SharedService , private productService:ProductService) { }

  ngOnInit(): void {
    this.email=<string>localStorage.getItem('email');
    console.log(this.email);
    this.shared.get(this.email).subscribe(response=>{

      for (let i=0; i<response.message.length; i++){
        this.titles.push(response.message[i].title)
      }

      for (let i=0; i<response.message.length; i++){
        this.colors.push(response.message[i].color)
      }

      for (let i=0; i<response.message.length; i++){
        this.sizes.push(response.message[i].size)
      }

      for (let i=0; i<response.message.length; i++){
        this.urls.push(response.message[i].url)
      }

      for (let i=0; i<response.message.length; i++){
        this.price+=<number>response.message[i].price
      }
      console.log(this.price)

    })
  }


  checkout() {
    this.shared.deleteAll(<string>localStorage.getItem('email')).subscribe(response=>{
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
