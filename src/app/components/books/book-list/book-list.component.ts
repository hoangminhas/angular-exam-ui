import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {IBook} from '../../../interfaces/ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
    });
  }
}
