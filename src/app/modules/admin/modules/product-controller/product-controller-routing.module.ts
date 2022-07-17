import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductControllerComponent } from './product-controller.component';
import {AddProductComponent} from "./components/add-product/add-product.component";
import {UpdateProductComponent} from "./components/update-product/update-product.component";
import {DeleteProductComponent} from "./components/delete-product/delete-product.component";
import {AdminDashboardGuard} from "../../../../guards/adminDashboardGuard";

const routes: Routes = [
  {path: '', redirectTo:'add-product' , pathMatch:'full' },
  {path:'add-product' , canActivate:[AdminDashboardGuard] , component:AddProductComponent},
  {path:'update-product' , canActivate:[AdminDashboardGuard] , component:UpdateProductComponent},
  {path:'delete-product' , canActivate:[AdminDashboardGuard] , component:DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductControllerRoutingModule { }
