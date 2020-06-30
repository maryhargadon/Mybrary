import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

//methods for users:

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/get-users')
      .pipe(
        tap(users => console.log('fetched Users')),
        catchError(this.handleError('getUsers', []))
      );
  }
  getUser(id: number): Observable<User> {
    //const url = `${apiUrl}/${id}`;
    return this.http.get<User>('/api/get-user/' + id).pipe(
      tap(_ => console.log(`fetched User id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('/api/add-user', user, httpOptions).pipe(
      tap((us: User) => console.log(`added User w/ id=${us._id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  updateUser(id: any, user: User): Observable<any> {
    //const url = `${apiUrl}/${id}`;
    return this.http.put('/api/update-user/' + id, user, httpOptions).pipe(
      tap(_ => console.log(`updated User id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id: any): Observable<User> {
    //const url = `${apiUrl}/${id}`;
    return this.http.delete<User>('/api/delete-user/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

}