import {Component, OnInit} from '@angular/core';
import {IBook} from '../../../interfaces/ibook';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  book;
  updateForm: FormGroup;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.bookService.getById(this.id).subscribe(res => {
      this.updateForm = this.fb.group({
        title: [res.title],
        author: [res.author],
        description: [res.description]
      });
    });
  }

  updateBook() {
    const data = this.updateForm.value;
    this.bookService.update(this.id, data).subscribe(res => this.router.navigate(['books']));
  }
}
