import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Book } from '../book/book';

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
    this.getCart()
  }

  //FormControl
  infoForm!: FormGroup
  get name() { return this.infoForm.get('name')!; }
  get email() { return this.infoForm.get('email')!; }
  get phone() { return this.infoForm.get('phone')!; }
  get address() { return this.infoForm.get('address')!; }

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
}
