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

  //Data for new-books section
  newBooks: Book[] = [this.books[0], this.books[1], this.books[3], this.books[6], this.books[7], this.books[8]]
}
