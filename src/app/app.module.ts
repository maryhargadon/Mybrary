import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookListComponent } from './book-list/book-list.component';

import { LendingBooksComponent } from './lending-books/lending-books.component';
import { ShowLendingBookComponent } from './show-lending-book/show-lending-book.component';
import { AddLendingBookComponent } from './add-lending-book/add-lending-book.component';
import { EditLendingBookComponent } from './edit-lending-book/edit-lending-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";


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
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
