import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { MasterComponent } from './components/core/master/master.component';
import { HeaderComponent } from './components/core/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { BookUpdateComponent } from './components/books/book-update/book-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BookDestroyComponent } from './components/books/book-destroy/book-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    MasterComponent,
    HeaderComponent,
    BookDetailComponent,
    BookAddComponent,
    BookUpdateComponent,
    BookDestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
