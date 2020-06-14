import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { LendingBook } from './lendingBook';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getBooks(): Observable<LendingBook[]> {
    return this.http.get<LendingBook[]>(apiUrl)
      .pipe(
        tap(books => console.log('fetched Books')),
        catchError(this.handleError('getBooks', []))
      );
  }
  getBook(id: number): Observable<LendingBook> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<LendingBook>(url).pipe(
      tap(_ => console.log(`fetched Book id=${id}`)),
      catchError(this.handleError<LendingBook>(`getBook id=${id}`))
    );
  }

  addLendingBook(book: LendingBook): Observable<LendingBook> {
    return this.http.post<LendingBook>(apiUrl, book, httpOptions).pipe(
      tap((bk: LendingBook) => console.log(`added Book w/ id=${bk._id}`)),
      catchError(this.handleError<LendingBook>('addBook'))
    );
  }

  updateBook(id: any, book: LendingBook): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, book, httpOptions).pipe(
      tap(_ => console.log(`updated Book id=${id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  deleteBook(id: any): Observable<LendingBook> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<LendingBook>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Book id=${id}`)),
      catchError(this.handleError<LendingBook>('deleteBook'))
    );
  }

}
