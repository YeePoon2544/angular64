import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  totalItem: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.totalItem = this.cartService.cartItemsList;

}
