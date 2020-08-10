import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import { HomepageComponent } from './homepage/homepage.component';

import { LendingBooksComponent } from './lending-books/lending-books.component';
import { ShowLendingBookComponent } from './show-lending-book/show-lending-book.component';
import { AddLendingBookComponent } from './add-lending-book/add-lending-book.component';
import { EditLendingBookComponent } from './edit-lending-book/edit-lending-book.component';

import { AlbumsComponent } from './albums/albums.component';
import { ShowAlbumComponent } from './show-album/show-album.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';

const routes: Routes = [

  { path: "homepage", component: HomepageComponent },
  { path: "user account", component: UserAccountComponent },
  { path: "login", component: LoginComponent },

  { path: 'lending-books', component: LendingBooksComponent, data: { title: 'Lending Books' } },
  { path: 'show-lending-book/:id', component: ShowLendingBookComponent, data: { title: 'Show Lending Book' } },
  { path: 'add-lending-book', component: AddLendingBookComponent, data: { title: 'Add Lending Book' } },
  { path: 'edit-lending-book/:id', component: EditLendingBookComponent, data: { title: 'Edit Book' } },
  // { path: '', redirectTo: '/lending-books', pathMatch: 'full' },

  { path: 'albums', component: AlbumsComponent, data: { title: 'Albums' } },
  { path: 'show-album/:id', component: ShowAlbumComponent, data: { title: 'Show Album' } },
  { path: 'add-album', component: AddAlbumComponent, data: { title: 'Add Album' } },
  { path: 'edit-album/:id', component: EditAlbumComponent, data: { title: 'Edit Album' } },
  // { path: '', redirectTo: '/albums', pathMatch: 'full' },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
