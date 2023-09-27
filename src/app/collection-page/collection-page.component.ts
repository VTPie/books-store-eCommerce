import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {

  //Get books
  books: Book[] = [];
  filteredBooks: Book[] = [];
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
          this.filteredBooks = [...this.books];
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

  //Author filter
  authorFilter = [
    'Susanna Clarke',
    'Frank Herbert',
    'Rudy Francisco',
    'Tiffany D. Jackson',
    'Romina Garber',
    'Lidia Yuknavitch',
    'Bryan Washington'
  ]

  filterByAuthor: string = ""

  radioChangeHandler(event: any) {
    this.filterByAuthor = event.target.value
    this.filteredBooks = [...this.books].filter(book => book.author === this.filterByAuthor)
  }
}
