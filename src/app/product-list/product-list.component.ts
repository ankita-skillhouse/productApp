import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=products
  constructor() { }
  Share()
  {
    window.alert('This item has been shared!')
  }
  OnNotify(){
    window.alert('Notified');
  }
  ngOnInit(): void {
  }

}
