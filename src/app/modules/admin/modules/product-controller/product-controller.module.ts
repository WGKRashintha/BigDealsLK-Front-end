import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductControllerRoutingModule } from './product-controller-routing.module';
import { ProductControllerComponent } from './product-controller.component';


@NgModule({
  declarations: [
    ProductControllerComponent
  ],
  imports: [
    CommonModule,
    ProductControllerRoutingModule
  ]
})
export class ProductControllerModule { }
