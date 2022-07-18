import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import {CheckoutComponent} from "./component/checkout/checkout.component";
import {UserLoginGuardGuard} from "../../guards/user-login-guard.guard";

const routes: Routes = [
  { path: '' ,component: CartComponent },
  {path:'checkout-page', canActivate:[UserLoginGuardGuard] , component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
