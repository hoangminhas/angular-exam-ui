import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasterComponent} from './components/core/master/master.component';
import {BookListComponent} from './components/books/book-list/book-list.component';
import {BookDetailComponent} from './components/books/book-detail/book-detail.component';
import {BookAddComponent} from './components/books/book-add/book-add.component';
import {BookUpdateComponent} from './components/books/book-update/book-update.component';
import {BookDestroyComponent} from './components/books/book-destroy/book-destroy.component';


const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'books/:id/detail',
        component: BookDetailComponent
      },
      {
        path: 'books/add',
        component: BookAddComponent
      },
      {
        path: 'books/:id/update',
        component: BookUpdateComponent
      },
      {
        path: 'books/:id/destroy',
        component: BookDestroyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
