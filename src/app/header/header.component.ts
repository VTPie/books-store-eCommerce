import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  changeActive(event: any) {
    let elements = document.querySelectorAll('.active');
    elements.forEach((element) => {
      element.classList.remove('active');
    });
    event.srcElement.classList.add('active')
  }
}
