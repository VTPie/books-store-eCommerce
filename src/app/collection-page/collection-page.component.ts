import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Popover } from 'bootstrap'

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {

  //Button ScrollToTop
  faChevronUp = faChevronUp;
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  //Get books
  books: Book[] = [];
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

  //Filter
  categories = [
    {
      id: 1,
      name: "Literature - Detective",
      checked: false
    },
    {
      id: 2,
      name: "Literature - Gothic",
      checked: false
    },
    {
      id: 3,
      name: "Literature - Historical",
      checked: false
    },
    {
      id: 4,
      name: "Literature - Fiction",
      checked: false
    },
    {
      id: 5,
      name: "Literature - Romance",
      checked: false
    },
    {
      id: 6,
      name: "Children",
      checked: false
    },
    {
      id: 7,
      name: "Economy",
      checked: false
    },
    {
      id: 8,
      name: "History",
      checked: false
    },
    {
      id: 9,
      name: "Law",
      checked: false
    },
    {
      id: 10,
      name: "Philosophy",
      checked: false
    },
    {
      id: 11,
      name: "Psychology",
      checked: false
    },
    {
      id: 12,
      name: "Political",
      checked: false
    },
    {
      id: 13,
      name: "Science",
      checked: false
    }
  ]
  authors = [
    {
      id: 1,
      name: 'Susanna Clarke',
      checked: false
    },
    {
      id: 2,
      name: 'Frank Herbert',
      checked: false
    },
    {
      id: 3,
      name: 'Rudy Francisco',
      checked: false
    },
    {
      id: 4,
      name: 'Tiffany D. Jackson',
      checked: false
    },
    {
      id: 5,
      name: 'Romina Garber',
      checked: false
    },
    {
      id: 6,
      name: 'Lidia Yuknavitch',
      checked: false
    },
    {
      id: 7,
      name: 'Bryan Washington',
      checked: false
    },
    {
      id: 8,
      name: 'Raven Leilani',
      checked: false
    },
    {
      id: 9,
      name: 'Leigh Stein',
      checked: false
    },
    {
      id: 10,
      name: 'Lucie Britsch',
      checked: false
    },
    {
      id: 11,
      name: 'David Chang',
      checked: false
    },
    {
      id: 12,
      name: 'Leife Shallcross',
      checked: false
    },
    {
      id: 13,
      name: 'Chelsea G. Summers',
      checked: false
    }
  ]
  filterCate: any[] = [];
  filterAuthor: any[] = [];
  onChangeCategory($event: any, category: any) {
    const checked = $event.target.checked;
    if (checked) {
      this.filterCate = [...this.filterCate, { ...category }];
    } else {
      this.filterCate = [...this.filterCate.filter(x => x.id !== category.id)];
    }
  }
  onChangeAuthor($event: any, author: any) {
    const checked = $event.target.checked;
    if (checked) {
      this.filterAuthor = [...this.filterAuthor, { ...author }];
    } else {
      this.filterAuthor = [...this.filterAuthor.filter(x => x.id !== author.id)];
    }
  }
  public get filteredBooks(): Book[] {
    let filtered = [...this.books];

    if (this.filterCate.length > 0) {
      filtered = filtered.filter(x => {
        const t = this.filterCate.find(v => v.name === x.category);
        return t != null;
      });
    }
    if (this.filterAuthor.length > 0) {
      filtered = filtered.filter(x => {
        const t = this.filterAuthor.find(v => v.name === x.author);
        return t != null;
      });
    }
    return filtered;
  }

  //Sorter
  valueSlSort: string = '1'
  getValueSlSort() {
    var e: any = document.getElementById("slSort");
    this.valueSlSort = e.value
    console.log(this.sortedBooks)
  }
  public get sortedBooks(): Book[] {
    let before = [...this.filteredBooks];
    let after: Book[] = []
    switch (this.valueSlSort) {
      case '1':
        after = before
        break
      case '2':
        after = before.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        break
      case '3':
        after = before.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
        break
      case '4':
        after = before.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        break
      case '5':
        after = before.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
        break
    }
    return after;
  }
}
