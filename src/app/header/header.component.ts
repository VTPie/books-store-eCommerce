import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faBarsStaggered, faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



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

  //Search action
  txtSearch = new FormControl('')
  captureSearch(event: any) {
    console.log(this.txtSearch.value)
  }

  //Icon
  faBarsStaggered = faBarsStaggered;
  faCartShopping = faCartShopping;
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
}
