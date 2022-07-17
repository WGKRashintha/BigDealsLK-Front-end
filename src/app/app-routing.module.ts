import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componenets/home/home.component";
import {UserLoginGuardGuard} from "./guards/user-login-guard.guard";

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'admin' , loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  { path: 'accounts', loadChildren: () => import('./modules/accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'cart', canActivate:[UserLoginGuardGuard] , loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
