import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductControllerComponent } from './product-controller.component';

const routes: Routes = [{ path: '', component: ProductControllerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductControllerRoutingModule { }
