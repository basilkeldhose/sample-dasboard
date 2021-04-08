import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'/dashboard',
    pathMatch:"full"
  },
  {
    path:"dashboard",component:AdminDashboardComponent
  },
  {
    path:"dashboard",component:AdminDashboardComponent,
    children:[
      {
        path:"products",component:ProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }