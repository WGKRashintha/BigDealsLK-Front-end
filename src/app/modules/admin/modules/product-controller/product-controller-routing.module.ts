import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductControllerComponent } from './product-controller.component';
import {AddProductComponent} from "./components/add-product/add-product.component";
import {UpdateProductComponent} from "./components/update-product/update-product.component";
import {DeleteProductComponent} from "./components/delete-product/delete-product.component";

const routes: Routes = [
  {path: '', redirectTo:'add-product' , pathMatch:'full' },
  {path:'add-product' , component:AddProductComponent},
  {path:'update-product' , component:UpdateProductComponent},
  {path:'delete-product' , component:DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductControllerRoutingModule { }
