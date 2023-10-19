import { Injectable } from '@angular/core';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  //Add product to cart
  addToCart(book: Book, qtt: number, price: number){
    //Get value from local-storage
    let productString: string = localStorage.getItem('cart_products') as string;
    let quantityString: string = localStorage.getItem('cart_quantity') as string;
    let priceString: string = localStorage.getItem('cart_price') as string;
    let totalString: string = localStorage.getItem('total_price') as string;

    //Convert to original array
    let cartProduct: Book[] = JSON.parse(productString) as Book[];
    let cartQtt: number[] = JSON.parse(quantityString) as number[];
    let cartPrice: number[] = JSON.parse(priceString) as number[];
    let totalPrice: number = JSON.parse(totalString) as number;

    //Add product to cart
    cartProduct.push(book);
    cartQtt.push(qtt);
    cartPrice.push(price);
    totalPrice = this.getSum(cartPrice)

    //Save cart to local storage
    localStorage.setItem('cart_products', JSON.stringify(cartProduct));
    localStorage.setItem('cart_quantity', JSON.stringify(cartQtt));
    localStorage.setItem('cart_price', JSON.stringify(cartPrice));
    localStorage.setItem('total_price', JSON.stringify(totalPrice));
  }

  //Delete product in cart
  deleteInCart(index: number) {
    //Get value from local-storage
    let productString: string = localStorage.getItem('cart_products') as string;
    let quantityString: string = localStorage.getItem('cart_quantity') as string;
    let priceString: string = localStorage.getItem('cart_price') as string;
    let totalString: string = localStorage.getItem('total_price') as string;

    //Convert to original array
    let cartProduct: Book[] = JSON.parse(productString) as Book[];
    let cartQtt: number[] = JSON.parse(quantityString) as number[];
    let cartPrice: number[] = JSON.parse(priceString) as number[];
    let totalPrice: number = JSON.parse(totalString) as number;

    //Delete product in cart
    let newCartProduct = cartProduct
    let newCartQtt = cartQtt
    let newCartPrice = cartPrice
    newCartProduct = cartProduct.splice(index, 1)
    newCartQtt = cartQtt.splice(index, 1)
    newCartPrice = cartPrice.splice(index, 1)
    totalPrice = this.getSum(cartPrice)

    //Save cart to local storage
    localStorage.setItem('cart_products', JSON.stringify(cartProduct));
    localStorage.setItem('cart_quantity', JSON.stringify(cartQtt));
    localStorage.setItem('cart_price', JSON.stringify(cartPrice));
    localStorage.setItem('total_price', JSON.stringify(totalPrice));
  }

  //Minus quantity
  minusQtt(index: number) {

    //Get value from local-storage
    let productString: string = localStorage.getItem('cart_products') as string;
    let quantityString: string = localStorage.getItem('cart_quantity') as string;
    let priceString: string = localStorage.getItem('cart_price') as string;
    let totalString: string = localStorage.getItem('total_price') as string;

    //Convert to original array
    let cartProduct: Book[] = JSON.parse(productString) as Book[];
    let cartQtt: number[] = JSON.parse(quantityString) as number[];
    let cartPrice: number[] = JSON.parse(priceString) as number[];
    let totalPrice: number = JSON.parse(totalString) as number;

    //Minus quantity
    if (cartQtt[index] > 1) {
      cartQtt[index]--
      cartPrice[index] -= cartProduct[index].price
    }
    totalPrice = this.getSum(cartPrice)

    //Save cart to local storage
    localStorage.setItem('cart_products', JSON.stringify(cartProduct));
    localStorage.setItem('cart_quantity', JSON.stringify(cartQtt));
    localStorage.setItem('cart_price', JSON.stringify(cartPrice));
    localStorage.setItem('total_price', JSON.stringify(totalPrice));
    
  }

  //Plus quantity
  plusQtt(index: number) {

    //Get value from local-storage
    let productString: string = localStorage.getItem('cart_products') as string;
    let quantityString: string = localStorage.getItem('cart_quantity') as string;
    let priceString: string = localStorage.getItem('cart_price') as string;
    let totalString: string = localStorage.getItem('total_price') as string;

    //Convert to original array
    let cartProduct: Book[] = JSON.parse(productString) as Book[];
    let cartQtt: number[] = JSON.parse(quantityString) as number[];
    let cartPrice: number[] = JSON.parse(priceString) as number[];
    let totalPrice: number = JSON.parse(totalString) as number;

    //Plus quantity
    cartQtt[index]++
    cartPrice[index] += cartProduct[index].price
    totalPrice = this.getSum(cartPrice)

    //Save cart to local storage
    localStorage.setItem('cart_products', JSON.stringify(cartProduct));
    localStorage.setItem('cart_quantity', JSON.stringify(cartQtt));
    localStorage.setItem('cart_price', JSON.stringify(cartPrice));
    localStorage.setItem('total_price', JSON.stringify(totalPrice));
  }

  //Get sum of array number
  getSum(arr: any) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }

  //Clear cart
  clearCart(){
        //Get value from local-storage
        let productString: string = localStorage.getItem('cart_products') as string;
        let quantityString: string = localStorage.getItem('cart_quantity') as string;
        let priceString: string = localStorage.getItem('cart_price') as string;
        let totalString: string = localStorage.getItem('total_price') as string;
    
        //Convert to original array
        let cartProduct: Book[] = JSON.parse(productString) as Book[];
        let cartQtt: number[] = JSON.parse(quantityString) as number[];
        let cartPrice: number[] = JSON.parse(priceString) as number[];
        let totalPrice: number = JSON.parse(totalString) as number;
    
        //Add product to cart
        cartProduct = []
        cartQtt = []
        cartPrice = []
        totalPrice = 0
    
        //Save cart to local storage
        localStorage.setItem('cart_products', JSON.stringify(cartProduct));
        localStorage.setItem('cart_quantity', JSON.stringify(cartQtt));
        localStorage.setItem('cart_price', JSON.stringify(cartPrice));
        localStorage.setItem('total_price', JSON.stringify(totalPrice));
  }
}
