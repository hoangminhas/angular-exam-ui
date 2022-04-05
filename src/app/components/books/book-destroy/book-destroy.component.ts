import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-destroy',
  templateUrl: './book-destroy.component.html',
  styleUrls: ['./book-destroy.component.css']
})
export class BookDestroyComponent implements OnInit {

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  deleteBook() {
    const id = this.route.snapshot.paramMap.get('id');
    if (confirm('Are you sure?')) {
      this.bookService.delete(id).subscribe(res => this.router.navigate(['books']));
    }
  }
}
