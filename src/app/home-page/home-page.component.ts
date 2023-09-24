import { Component } from '@angular/core';
import { faBook, faFaceSmile, faCartShopping, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  faBook = faBook;
  faFaceSmile = faFaceSmile;
  faCartShopping = faCartShopping;
  faUsers = faUsers;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dotsEach: true,
    margin: 0,
    autoplay: true,
    center: true,
    autoplayHoverPause: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  evaluateOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dotsEach: true,
    margin: 30,
    autoplay: true,
    center: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  }
}
