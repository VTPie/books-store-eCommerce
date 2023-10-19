import { Component, OnInit } from '@angular/core';
import { faTrash, faMinus, faPlus, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Book } from '../book/book';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  //Change quantity
  minusQtt(index: number) {
    this.cartService.minusQtt(index)
    this.getCart()
  }
  plusQtt(index: number) {
    this.cartService.plusQtt(index)
    this.getCart()
  }

  //Delete product from cart
  deleteProductFromCart(index: number) {
    this.cartService.deleteInCart(index)
    this.getCart()
  }

  //Icon
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;
  faFaceFrown = faFaceFrown;

  //Return home
  returnHome() {
    this.router.navigate(['home'])
  }

  //Navigate to Payment
  navToPayment() {
    this.router.navigate(['checkout']);
  }

  //Cart
  cartProduct: Book[] = []
  cartQtt: number[] = []
  cartPrice: number[] = []
  totalPrice: number=0

  getCart(){
    //Get value from local-storage
    let productString: string = localStorage.getItem('cart_products') as string;
    let quantityString: string = localStorage.getItem('cart_quantity') as string;
    let priceString: string = localStorage.getItem('cart_price') as string;
    let totalString: string = localStorage.getItem('total_price') as string;
    //Convert to original array
    this.cartProduct= JSON.parse(productString) as Book[];
    this.cartQtt= JSON.parse(quantityString) as number[];
    this.cartPrice= JSON.parse(priceString) as number[];
    this.totalPrice= JSON.parse(totalString) as number;
  }

  ngOnInit(): void {
    this.getCart()
  }
}
