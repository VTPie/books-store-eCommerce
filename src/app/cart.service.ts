import { Injectable } from '@angular/core';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartList: Book[] = [];

  addToCart(book: Book) {
    this.cartList.push(book);
  }

  getItems() {
    return this.cartList;
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }
}
