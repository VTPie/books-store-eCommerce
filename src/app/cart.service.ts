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

  deleteProduct(index: number) {
    let newCart = this.cartList
    let newCartQtt = this.cartListQtt
    let newCartPrice = this.cartListPrice

    newCart = newCart.splice(index, 1)
    newCartQtt = newCartQtt.splice(index, 1)
    newCartPrice = newCartPrice.splice(index, 1)
  }
}
