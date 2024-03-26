import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './mock-products';
import { Products } from './products';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productLength:number;

  constructor(private messageService:MessageService) { }
getProducts():Observable<Products[]>{
 this.messageService.add('ProductService: fetch product')
  this.productLength=PRODUCTS.length;
  return of(PRODUCTS);
}

getProduct(id: number): Observable<Products> {
  this.messageService.add(`ProductService: fetched product id=${id}`);
  this.productLength = PRODUCTS.length;
  return of(PRODUCTS.find(product => product.id === id));
}

}
