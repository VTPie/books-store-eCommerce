import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { faTrash, faMinus, faPlus, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  //Get property from service CART
  cartList = this.cartService.getItems();
  cartListQtt = this.cartService.getQtt();
  cartListPrice = this.cartService.getPrice();

  //Change quantity
  minusQtt(num: number) {
    if (this.cartListQtt[num] > 1) {
      this.cartListQtt[num]--
    }
    this.cartListPrice[num] = this.cartListQtt[num] * this.cartList[num].price
  }
  plusQtt(num: number) {
    this.cartListQtt[num]++
    this.cartListPrice[num] = this.cartListQtt[num] * this.cartList[num].price
  }

  //Delete product from cart
  deleteProductFromCart(index: number) {
    this.cartService.deleteProduct(index)
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
}
