import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from '../../environments/environment'
import { Products } from "./products"
import { ProductsComponent } from '../admin-dashboard/products/products.component';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  selectedProducts: Products = {
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
  products: Products[] | undefined

  constructor(private http: HttpClient) { }

  postproduct(products: Products) {
    return this.http.post(environment.apiBaseUrl + '/product', products);
  }
  getproductList() {
    return this.http.get(environment.apiBaseUrl + '/products');
  }
  putProduct(products: Products) {
    return this.http.put(environment.apiBaseUrl + `/${products._id}`, products);
  }

  deleteProduct(_id: string) {
    return this.http.delete(environment.apiBaseUrl + `/${_id}`);
  }
}
