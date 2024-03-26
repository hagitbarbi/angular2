import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';
import { Sorts } from '../sort';
import { SORTS } from '../mock-products';
import Utils from '../utils';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() filterByCategory: string="";
  // @Input() sortBy: string="";

  products:Products[] = [];
  sortList: Sorts[] = SORTS;
  selectedProduct: number = 0

  private _sortBy: number = 0;

  @Input() set sortBy(value: number){
    this._sortBy = value;
    this.sortProduct(value);
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.sortProduct(0);

  }

  getProducts():void{
    this.productService.getProducts()
      .subscribe(products => this.products = products);
    
    
  }

  private sortProduct(sortIndex: number){

    let sortObj = this.sortList[sortIndex];
    if(sortObj.type === "number"){
      this.products = Utils.sortNumber(this.products,sortObj.key,sortObj.desc);
    }else{
      this.products = Utils.sortString(this.products,sortObj.key,sortObj.desc);
    }
  }

}
