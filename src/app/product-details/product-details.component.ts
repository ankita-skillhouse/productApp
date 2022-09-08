import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 product:Product|undefined;
  constructor(private route:ActivatedRoute, private cartservice:CartService) { }

  ngOnInit(): void {
    const routeParams=this.route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParams.get('productId'));
    this.product= products.find(x=>x.id == productIdFromRoute);
  }
  buyProduct(product:Product)
  {
      this.cartservice.addToCart(product);
      window.alert('Your product has been added to the cart!');
  }
}
