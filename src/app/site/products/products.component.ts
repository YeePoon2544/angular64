import { CartService } from './../../service/cart.service';
import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: any;
  constructor(private productsService: ProductsService,
        private cartService: CartService) {}

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(result => {
      this.items = result;
    });
  }
  addToCart(item): void {
  // นำข้อมูลสินค้าใส่อาเรย์
  this.cartService.cartItemsList.push(item);
  console.log(this.cartService.cartItemsList);
  }
}
