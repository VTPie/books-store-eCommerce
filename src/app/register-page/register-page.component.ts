import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
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
}
