import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../../services/shared.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productCode: string = '';
  productData: any[] = [];
  urls: any[] = [];
  selectedImage: any='';
  title: string='';
  description: string='';
  colors: string[]=[];
  sizes: string[]=[];
  price:number=0;

  chosenColor: string='';
  chosenSize:string='';
  chosenUrl:string='';

  constructor(private productService:ProductService , private activatedRoute:ActivatedRoute , private shared:SharedService , private router:Router) { }

  ngOnInit(): void {
    this.productCode=<string>this.activatedRoute.snapshot.paramMap.get('productCode');
    // @ts-ignore
    this.productCode=this.productCode?.slice(1);
    console.log(this.productCode);

    this.productService.get(this.productCode).subscribe(response=>{
      console.log(response.message);
      this.productData=response.message;
      this.urls=response.message.urls;

      if(this.selectedImage.length==0){
        this.selectedImage=this.urls[0];
      }
      this.title=response.message.title;
      this.description=response.message.description;
      this.colors=response.message.colors;
      this.sizes=response.message.sizes;
      this.price=<number>response.message.price;

      this.chosenUrl=this.urls[0];
    } , error => {
      console.log(error);
    })
  }


  setSize(tempSizes: string) {
    this.chosenSize=tempSizes;
    console.log(this.chosenSize);
  }

  setColor(tempColor: string) {
    this.chosenColor=tempColor;
  }

  addToCart() {
    this.shared.setProductData(this.title , this.chosenColor , this.chosenSize , this.chosenUrl , this.price);
    this.router.navigate(['/cart']);
  }
}
