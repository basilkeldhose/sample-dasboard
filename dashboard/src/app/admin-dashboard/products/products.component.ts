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
  products=new Products
  productList =Array()
  panelExpand:boolean=false
  constructor(public productservice:ProductsService,public toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.refreshuserlist()
  }

  /***********ACORDION OPEN*************/

  open(_id:string){
    console.log(_id);
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i]._id == _id){
        this.panelExpand=!this.panelExpand
      }
      else{
        this.panelExpand=this.panelExpand
      }
    }
  }

/************BUTTON TOGGLE************/

  Toggle(_id:string){
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i]._id == _id){
        this.show =!this.show;
      }
      else{
        this.show =this.show;
      }
    }
  }

  /*********REFRESH PRODUCTLIST********/

  refreshuserlist() {
    this.productservice.getproductList().subscribe((res) => {
      this.productservice.products = res as Products[]
      this.productList =[...this.productservice.products]
      console.log(this.productList)
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
