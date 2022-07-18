import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import {CheckoutComponent} from "./component/checkout/checkout.component";

const routes: Routes = [
  { path: '' ,component: CartComponent },
  {path:'checkout-page' , component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
