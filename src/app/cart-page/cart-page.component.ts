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

  cartList = this.cartService.getItems();

  //Quantity
  quantity: number = 1
  minusQtt() { }
  plusQtt() { }

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
