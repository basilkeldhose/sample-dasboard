import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductsComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule
  ]
})
export class AdminDashboardModule { }
