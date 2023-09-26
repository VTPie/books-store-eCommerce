import { Component, OnInit } from '@angular/core';
import { faBook, faFaceSmile, faCartShopping, faUsers } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from 'src/app/loader.service';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  //Icon for Statistics section
  faBook = faBook;
  faFaceSmile = faFaceSmile;
  faCartShopping = faCartShopping;
  faUsers = faUsers;

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

  //Fetch data
  books: Book[] = [];
  newBooks: Book[] = [];
  dailyDeals: Book[] = [];
  weeklyDeals: Book[] = [];
  bestSelling: Book[] = [];
  errorMessage = '';
  constructor(private bookService: BookService, private loader: LoaderService) { }
  ngOnInit(): void {
    this.getBookData();
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
        },
        error: (err) => {
          this.errorMessage = <any>err;
          this.loader.hide();
        },
        complete: () => {
          console.info('Get books');
          this.loader.hide();
        }
      });
  }
}
