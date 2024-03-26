import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
details: any;
id:number=1;
maxId:number=0;

product:Products;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private productService:ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.id= +param['id'];
      this.getProduct();
    })
  }

  getProduct():void{
    this.maxId=this.productService.productLength;
    this.productService.getProduct(this.id).subscribe(product=>this.product=product)
  }

  goBack(): void {
    //this.location.back();
    this.router.navigate([''], {relativeTo: this.route})
  }

  goProdact(nav: string){
    this.id += (nav == "next" ? 1 : -1);
    this.router.navigate(['/details', this.id], {relativeTo: this.route});
  }

}
