import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';
import { ActivatedRoute } from '@angular/router';
import { faStar, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute, private bookService: BookService, private loader: LoaderService
  ) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getBookData();
  }

  //Fetch data
  errorMessage = '';
  getBookData() {
    this.loader.show();
    this.bookService.getBook(this.id)
      .subscribe({
        next: (book) => {
          this.targetBook = book;
        },
        error: (err) => {
          this.errorMessage = <any>err;
          this.loader.hide();
        },
        complete: () => {
          this.loader.hide();
        }
      });
    this.bookService.getBooks()
      .subscribe({
        next: (books) => {
          this.relatedBooks = books.filter(book => book.category === this.targetBook.category)
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

  //Input get product ID
  public id: string = '';

  //Get target product
  targetBook!: Book

  //Icon
  faStar = faStar;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faPinterest = faPinterest;
  faLinkedin = faLinkedin;
  faMinus = faMinus;
  faPlus = faPlus;

  //Quantity
  quantity: number = 1;
  plusQtt() {
    this.quantity++
  }
  minusQtt() {
    if (this.quantity > 0) {
      this.quantity--
    }
  }

  //Get related books list
  relatedBooks: Book[] = [];
}
