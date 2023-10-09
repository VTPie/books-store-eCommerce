import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faBarsStaggered, faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Popover } from 'bootstrap'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

  ngOnInit(): void {
    //Action coming soon
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]')).forEach(popoverNode => new Popover(popoverNode))
  }
}
