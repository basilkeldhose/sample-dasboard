import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList=[{name:"sample1",
  originalPrice:300,
  totalPrice:140,
  Dryclean:10,
  leadprice:120,
  ownerprice:0,
  brand:"puma",
  category:"top",
  material:"cotton",
  care:"dry clean only",
  color:"black",
  size:30
}]
show:boolean =false
panelExpand:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  Toggle(i:number){
    this.show =!this.show;
  }
  open(i:number){
    this.panelExpand=!this.panelExpand
  }
  delete(){

  }
  update(){

  }
}
