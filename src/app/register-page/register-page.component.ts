import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  constructor(private router: Router) { }

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


  //Login method
  onSubmitLogin() {
    if (this.signin.value.username === "admin@gmail.com" && this.signin.value.psw === "admin") {
      alert("successful authentication.")
      localStorage.setItem('token', Math.random().toString());
      this.router.navigate(['account'])
    }
    else {
      alert("authentication failed.")
    }
  }
}
