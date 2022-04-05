import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IBook} from '../../interfaces/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.api_url + 'books');
  }

  getById(id): Observable<any> {
    return this.http.get(environment.api_url + `books/${id}`);
  }

  addBook(book): Observable<any> {
    return this.http.post(environment.api_url + 'books', book);
  }

  update(id, data): Observable<any> {
    return this.http.put(environment.api_url + `books/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(environment.api_url + `books/${id}`);
  }
}
