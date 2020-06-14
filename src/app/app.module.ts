import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookListComponent } from './book-list/book-list.component';

import { LendingBooksComponent } from './lending-books/lending-books.component';
import { ShowLendingBookComponent } from './show-lending-book/show-lending-book.component';
import { AddLendingBookComponent } from './add-lending-book/add-lending-book.component';
import { EditLendingBookComponent } from './edit-lending-book/edit-lending-book.component';


@NgModule({
  declarations: [
    AppComponent,
    UserAccountComponent,
    HomepageComponent,
    BookListComponent,
    LendingBooksComponent,
    ShowLendingBookComponent,
    AddLendingBookComponent,
    EditLendingBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
