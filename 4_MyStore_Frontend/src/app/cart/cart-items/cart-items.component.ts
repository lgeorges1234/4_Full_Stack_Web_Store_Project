import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  @Input() item: Product;

  @Output() modifyItemFromCart: EventEmitter<Product> = new EventEmitter;

  constructor(private cartService: CartService) { 
    this.item = {
      "id": 0,
      "name": '',
      "price": 0,
      "url": '',
      "description": '',
      "quantity": 0,
      "category": '',
    };
  }

  ngOnInit(): void {

  }

  quantityChanged(newQuantity:any): void {
    const newItem: Product = {
      id: this.item.id,
      name: this.item.name,
      price: this.item.price,
      url: this.item.url,
      description: this.item.description,
      quantity: newQuantity,
      category: this.item.category,
    }
    this.cartService.addToCart(newItem);
    this.modifyItemFromCart.emit();
  }

}
