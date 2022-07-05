import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductControllerRoutingModule } from './product-controller-routing.module';
import { ProductControllerComponent } from './product-controller.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProductControllerComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductControllerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ProductControllerModule { }
