import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ProductsService} from '../../services/products.service'
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'
import {Products} from '../../services/products'
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor( public productservice:ProductsService,private toastr:ToastrService,public router:Router) { }

  ngOnInit(): void {
    this.resetForm()
  }

/************FORM SUMBMIT *****************/

onSubmit(form:NgForm){
  if (form.value._id == "") {
    this.productservice.postproduct(form.value).subscribe((res) => {
      this.toastr.success('product added');
      this.resetForm(form)
    })
  }
  else {
    this.productservice.putProduct(form.value).subscribe((res) => {
      this.toastr.success('product updated');
      this.resetForm(form)
      // this.router.navigateByUrl("dashboard/products");
    })
  }
}

/************RESET FORM**************/

resetForm(form?:NgForm){
if(form){
  form.reset()
  this.productservice.selectedProducts={
    _id: "",
    productname: "",
    brand: "",
    category: "",
    meterial: "",
    care: "",
    color: "",
    size: 0,
    originalprice: 0,
    totalprice: 0,
    drycleanprice: 0,
    leadprice: 0,
    ownerprice: 0
  }
}
}
}
