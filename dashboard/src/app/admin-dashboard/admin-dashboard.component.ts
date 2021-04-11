import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

/**********PRODUCT NAVIGATION*********/

Products(){
this.router.navigateByUrl("dashboard/products")
}
/***********ADD PRODUCT NAIGATION**************/
addProduct(){
  this.router.navigateByUrl("dashboard/addproduct")
}
}
