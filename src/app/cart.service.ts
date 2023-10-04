import { Injectable } from '@angular/core';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartList: Book[] = [];
  cartListQtt: number[] = [];
  cartListPrice: number[] = [];

  addToCart(book: Book, qtt: number, price: number) {
    this.cartList.push(book);
    this.cartListQtt.push(qtt);
    this.cartListPrice.push(price);
  }

  getItems() {
    return this.cartList;
  }
  getQtt() {
    return this.cartListQtt;
  }
  getPrice() {
    return this.cartListPrice;
  }

  deleteProduct(product: Book) {
    let newCart = [...this.cartList]
    newCart = newCart.filter((item) => item.id !== product.id)
    return newCart
  }
}
