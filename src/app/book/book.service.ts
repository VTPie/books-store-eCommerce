import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from './book';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = environment.baseUrl + 'books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getBook(id: string | null): Observable<Book> {
    if (id === '') {
      return of(this.initializeBook());
    }
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // createBook(book: Book): Observable<Book> {
  //   book.id = '';
  //   return this.http.post<Book>(this.booksUrl, book)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // deleteBook(id: string): Observable<{}> {
  //   const url = `${this.booksUrl}/${id}`;
  //   return this.http.delete<Book>(url)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // updateBook(book: Book): Observable<Book> {
  //   const url = `${this.booksUrl}/${book.id}`;
  //   return this.http.put<Book>(url, book)
  //     .pipe(
  //       map(() => book),
  //       catchError(this.handleError)
  //     );
  // }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }

  private initializeBook(): Book {
    return {
      id: "",
      name: "",
      author: "",
      image: "",
      price: 0,
      category: ""
    };
  }
}