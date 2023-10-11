import { Component, OnInit } from '@angular/core';
import { faBook, faFaceSmile, faCartShopping, faUsers, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from 'src/app/loader.service';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';
import { Popover } from 'bootstrap'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  //Icon
  faBook = faBook;
  faFaceSmile = faFaceSmile;
  faCartShopping = faCartShopping;
  faUsers = faUsers;
  faChevronUp = faChevronUp;

  //Action for carousel in new-book section
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
        items: 1,
        center: false,
      },
      340: { // 436px -> 535px
        items: 2,
        center: false,
        margin: 10,
      },
      440: { //536px -> 835px
        items: 3
      },
      740: { //836px -> 1035px
        items: 4,
        margin: 10,
        center: false,
      },
      940: { //1036px -> max
        items: 5
      }
    },
    nav: true
  }

  //Action for carousel in what-client-says section
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

  //Action smooth scroll in sales-section
  scrollToDailySale(elem: string) {
    document.querySelector(elem)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  //Action smooth scroll in button ScrollToTop
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  //Fetch data
  books: Book[] = [];
  newBooks: Book[] = [];
  dailyDeals: Book[] = [];
  weeklyDeals: Book[] = [];
  bestSelling: Book[] = [];
  listSusan: Book[] = [];
  listEvaluate = [
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_01.png',
      name: 'John Doe',
      national: 'Bristol',
      comment: 'I am so happy to find a site where I can shop for unusual items. The packaging was phenomenal and my book arrived on time in perfect condition.'
    },
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_02.png',
      name: 'Pam Pruitt',
      national: 'London',
      comment: 'This is the best book store!. The prices are great, and there is always a sale of some kind going on. You can find just what you are looking for. So great !'
    },
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png',
      name: 'Ellie A.',
      national: 'Liverpool',
      comment: 'Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.'
    },
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_01.png',
      name: 'John Doe',
      national: 'Bristol',
      comment: 'I am so happy to find a site where I can shop for unusual items. The packaging was phenomenal and my book arrived on time in perfect condition.'
    },
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_02.png',
      name: 'Pam Pruitt',
      national: 'London',
      comment: 'This is the best book store!. The prices are great, and there is always a sale of some kind going on. You can find just what you are looking for. So great !'
    },
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png',
      name: 'Ellie A.',
      national: 'Liverpool',
      comment: 'Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.'
    },
  ]
  errorMessage = '';
  constructor(private bookService: BookService, private loader: LoaderService) { }
  ngOnInit(): void {
    this.getBookData();


    //Action coming soon
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]')).forEach(popoverNode => new Popover(popoverNode))
  }
  getBookData() {
    this.loader.show();
    this.bookService.getBooks()
      .subscribe({
        next: (books) => {
          this.books = books;
          this.newBooks = books.slice(0, 6)
          this.dailyDeals = books.slice(6, 14)
          this.weeklyDeals = books.slice(14, 22)
          this.bestSelling = books.slice(0, 10)
          this.listSusan = books.filter(book => book.author === 'Susanna Clarke')
        },
        error: (err) => {
          this.errorMessage = <any>err;
          this.loader.hide();
        },
        complete: () => {
          this.loader.hide();
        }
      });
  }
}
