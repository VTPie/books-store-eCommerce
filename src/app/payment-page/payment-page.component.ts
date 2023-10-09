import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent {

  constructor(
    private cartService: CartService
  ) { }

  infoForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  //Get property from service CART
  cartList = this.cartService.getItems();
  cartListQtt = this.cartService.getQtt();
  cartListPrice = this.cartService.getPrice();
  totalAmount = this.cartService.getTotalPrice()
}
