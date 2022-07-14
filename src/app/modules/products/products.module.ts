import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MensComponent } from './components/mens/mens.component';
import { WomensComponent } from './components/womens/womens.component';
import { BagsComponent } from './components/bags/bags.component';
import { GlassesComponent } from './components/glasses/glasses.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    ProductsComponent,
    MensComponent,
    WomensComponent,
    BagsComponent,
    GlassesComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
