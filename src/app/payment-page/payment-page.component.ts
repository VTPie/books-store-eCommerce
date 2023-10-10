import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router
  ) { }
  ngOnInit(): void {
    //FormControl
    this.infoForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }

  //FormControl
  infoForm!: FormGroup
  get name() { return this.infoForm.get('name')!; }
  get email() { return this.infoForm.get('email')!; }
  get phone() { return this.infoForm.get('phone')!; }
  get address() { return this.infoForm.get('address')!; }


  //Get property from service CART
  cartList = this.cartService.getItems();
  cartListQtt = this.cartService.getQtt();
  cartListPrice = this.cartService.getPrice();
  totalAmount = this.cartService.getTotalPrice()

  //Submit form
  checkout() {
    if (!this.infoForm.value.name || !this.infoForm.value.name || !this.infoForm.value.name || !this.infoForm.value.name) {
      this.toastr.error('Input cannot be empty.', 'Sorry!');
    }
    else {
      this.router.navigate(['thanks']);
      this.cartService.clearCart()
    }
  }
}
