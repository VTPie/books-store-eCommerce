import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  constructor(
    private cartService: CartService
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
}
