import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {ProductsService} from "../../services/products.service"
import { ToastrService } from 'ngx-toastr';
import {Products} from "../../services/products"
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  droplist =false
show:boolean =false
panelExpand:boolean=false
  constructor(public productservice:ProductsService,public toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.refreshuserlist()
  }

  Toggle(i:number){
    this.show =!this.show;
  }
  open(i:number){
    console.log(i)
      this.panelExpand=!this.panelExpand
  }
  dropdown(){
    this.droplist=!this.droplist
  }
  /*********REFRESH PRODUCTLIST********/
  refreshuserlist() {
    this.productservice.getproductList().subscribe((res) => {
      this.productservice.products = res as Products[]
    });
  }
  /*********DELETE PRODUCT*********/
  delete(_id:string){
    if(confirm("are you sure to delete this product record")==true){
      this.productservice.deleteProduct(_id).subscribe((res)=>{
        this.refreshuserlist();
        this.toastr.success('delete sucessfull!');
      });
    }
  }
  /***********UPDATE************/
  update(products:Products){
    this.productservice.selectedProducts = products;
    this.router.navigateByUrl("dashboard/update");

  }
}
