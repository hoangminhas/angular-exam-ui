import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../../../interfaces/ibook';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  addForm: FormGroup;
  book: IBook[];

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }

  addBook() {
    const data = this.addForm.value;
    this.bookService.addBook(data).subscribe(res => {
      this.router.navigate(['books']);
    });
  }

}
