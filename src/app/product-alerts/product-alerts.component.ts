import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() iproduct:Product|undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
}
