import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';
import { ActivatedRoute } from '@angular/router';
import { faStar, faMinus, faPlus, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Popover } from 'bootstrap'

declare var window: any
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private loader: LoaderService,
    private router: Router,
    private cartService: CartService,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getBookData();

    //Show modal
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("modal-route-to-login")
    )

    //Action coming soon
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]')).forEach(popoverNode => new Popover(popoverNode))
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
          this.authorBooks = books.filter(book => book.author === this.targetBook.author)
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
  faChevronUp = faChevronUp;

  //Quantity
  quantity: number = 1;
  totalPrice: number = 0
  plusQtt() {
    this.quantity++
    this.totalPrice = this.targetBook.price * this.quantity
  }
  minusQtt() {
    if (this.quantity > 1) {
      this.quantity--
    }
    this.totalPrice = this.targetBook.price * this.quantity
  }

  //Get related books list
  relatedBooks: Book[] = [];

  //Get same author books list
  authorBooks: Book[] = [];

  //Change template on mini-nav
  indexTemplate: number = 1;
  subnav = document.getElementsByClassName("sub-nav");
  changeTemplate(event: any) {
    switch (event.target.id) {
      case 'template1':
        this.indexTemplate = 1
        break
      case 'template2':
        this.indexTemplate = 2
        break
      case 'template3':
        this.indexTemplate = 3
        break
    }
    let elements = document.querySelectorAll('.active');
    elements.forEach((element) => {
      element.classList.remove('active');
    });
    event.srcElement.classList.add('active')
  }

  //Data fot review section
  listReview = [
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_01.png',
      name: 'John Doe',
      date: 'February 15, 2022',
      national: 'Bristol',
      comment: 'I am so happy to find a site where I can shop for unusual items. The packaging was phenomenal and my book arrived on time in perfect condition.'
    },
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_02.png',
      name: 'Pam Pruitt',
      date: 'February 15, 2022',
      national: 'London',
      comment: 'This is the best book store!. The prices are great, and there is always a sale of some kind going on. You can find just what you are looking for. So great !'
    },
    {
      image: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png',
      name: 'Ellie A.',
      date: 'February 15, 2022',
      national: 'Liverpool',
      comment: 'Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.'
    }
  ]

  //Action smooth scroll in button ScrollToTop
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  //Add to cart && Buy now
  formModal: any
  token = localStorage.getItem('token');
  addToCart() {
    if (this.token) {
      if (this.totalPrice === 0) {
        this.cartService.addToCart(this.targetBook, this.quantity, this.targetBook.price);
      }
      else {
        this.cartService.addToCart(this.targetBook, this.quantity, this.totalPrice);
      }

      this.toastr.success('Your product has been added to the cart!', 'Congratulation!');
    }
    else {
      this.formModal.show()
    }
  }
  navToLogin() {
    this.router.navigate(['register']);
    this.formModal.hide()
  }
  buyNow() {
    if (this.token) {
      this.router.navigate(['checkout']);
    }
    else {
      this.formModal.show()
    }
  }

  //Related carousel
  productOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dotsEach: true,
    margin: 50,
    autoplay: true,
    center: false,
    autoplayHoverPause: true,
    responsive: {
      0: { // 0px -> 352px
        items: 1,
        center: false,
      },
      354: { // 353px -> 575px
        items: 2,
        center: false,
      },
      500: { //500px -> 991px
        items: 3
      },
      896: { //992px -> 1199px
        items: 4,
        center: false,
      },
      1104: { //1200px -> max
        items: 5,
      }
    },
    nav: false
  }
}
