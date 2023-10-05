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
  // totalPrice: number = 0
  totalPrice: number[] = []


  addToCart(book: Book, qtt: number, price: number) {
    this.cartList.push(book);
    this.cartListQtt.push(qtt);
    this.cartListPrice.push(price);
    this.totalPrice[0] = this.getSum(this.cartListPrice)
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
  minusQtt(index: number) {
    if (this.cartListQtt[index] > 1) {
      this.cartListQtt[index]--
      this.cartListPrice[index] -= this.cartList[index].price
    }
    this.totalPrice[0] = this.getSum(this.cartListPrice)
  }
  plusQtt(index: number) {
    this.cartListQtt[index]++
    this.cartListPrice[index] += this.cartList[index].price
    this.totalPrice[0] = this.getSum(this.cartListPrice)
  }
  deleteProduct(index: number) {
    let newCart = this.cartList
    let newCartQtt = this.cartListQtt
    let newCartPrice = this.cartListPrice

    newCart = newCart.splice(index, 1)
    newCartQtt = newCartQtt.splice(index, 1)
    newCartPrice = newCartPrice.splice(index, 1)

    this.totalPrice[0] = this.getSum(this.cartListPrice)
  }
  getSum(arr: any) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }
  getTotalPrice() {
    return this.totalPrice
  }
}
