import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {RegisterAdminComponent} from "./components/register-admin/register-admin.component";
import {UpdateAdminComponent} from "./components/update-admin/update-admin.component";
import {DeleteAdminComponent} from "./components/delete-admin/delete-admin.component";
import {AdminDashboardGuard} from "../../guards/adminDashboardGuard";

const routes: Routes = [
  {path: '',  component: AdminComponent },
  {path:'register-admin' , canActivate:[AdminDashboardGuard] , component:RegisterAdminComponent},
  {path:'update-admin' , canActivate:[AdminDashboardGuard] , component:UpdateAdminComponent},
  {path:'delete-admin' , canActivate:[AdminDashboardGuard] , component:DeleteAdminComponent},
  {path: 'product-controller', loadChildren: () => import('./modules/product-controller/product-controller.module').then(m => m.ProductControllerModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
