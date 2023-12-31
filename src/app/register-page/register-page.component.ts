import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../book/book';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  constructor(private router: Router, private toastr: ToastrService) { }

  //Change template
  indexTemplate: number = 1;
  subnav = document.getElementsByClassName("sub-nav");
  changeTemplate(event: any) {
    switch (event.target.id) {
      case 'template1':
        this.indexTemplate = 1
        break
      case 'template2':
        this.indexTemplate = 2
        break
      case 'template3':
        this.indexTemplate = 3
        break
    }
    let elements = document.querySelectorAll('.active');
    elements.forEach((element) => {
      element.classList.remove('active');
    });
    event.srcElement.classList.add('active')
  }

  //Authentication
  signin = new FormGroup({
    username: new FormControl(''),
    psw: new FormControl('')
  })

  //Init Cart
  initCartProduct: Book[] = [];
  initCartQtt: number[] = [];
  initCartPrice: number[] = [];
  initTotalPrice: number = 0;


  //Login method
  onSubmitLogin() {
    if (this.signin.value.username === "admin@gmail.com" && this.signin.value.psw === "admin") {
      this.toastr.success('Successful authentication.', 'Congratulation!');
      localStorage.setItem('token', Math.random().toString());
      localStorage.setItem('cart_products', JSON.stringify(this.initCartProduct));
      localStorage.setItem('cart_quantity', JSON.stringify(this.initCartQtt));
      localStorage.setItem('cart_price', JSON.stringify(this.initCartPrice));
      localStorage.setItem('total_price', JSON.stringify(this.initTotalPrice));
      this.router.navigate(['account'])
    }
    else {
      this.toastr.error('Authentication failed. Username or password is incorrect.', 'Sorry!');
    }
  }
}
