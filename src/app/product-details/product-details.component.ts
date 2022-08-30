import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 product:Product|undefined;
  constructor(private route:ActivatedRoute) { }


  ngOnInit(): void {
    const routeParams=this.route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParams.get('productId'));
    this.product= products.find(x=>x.id == productIdFromRoute);
  }

}
