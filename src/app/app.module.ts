import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserAccountComponent } from './user-account/user-account.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookListComponent } from './book-list/book-list.component';

import { LendingBooksComponent } from './lending-books/lending-books.component';
import { ShowLendingBookComponent } from './show-lending-book/show-lending-book.component';
import { AddLendingBookComponent } from './add-lending-book/add-lending-book.component';
import { EditLendingBookComponent } from './edit-lending-book/edit-lending-book.component';

import { AlbumsComponent } from './albums/albums.component';
import { ShowAlbumComponent } from './show-album/show-album.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { JwtInterceptor,  } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertComponent } from './_components/alert.component';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

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
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    UserAccountComponent,
    HomepageComponent,
    BookListComponent,
    LendingBooksComponent,
    ShowLendingBookComponent,
    AddLendingBookComponent,
    EditLendingBookComponent,
    AlbumsComponent,
    AddAlbumComponent,
    ShowAlbumComponent,
    EditAlbumComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    AdminComponent
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    //,
   // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
