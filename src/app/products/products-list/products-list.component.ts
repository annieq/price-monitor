import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  products : string[];

  constructor(productsService : ProductsService) { 
    this.products = productsService.getProducts();
  }

  ngOnInit(): void {
  }

  addProduct(product : string) {
    this.products.push(product);
  }
}
