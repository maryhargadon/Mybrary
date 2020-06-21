import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';
import { ApiService } from '../api.service';
import { Book } from '../book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  users = [];

  constructor(
    private authenticationService: AuthenticationService,
    private apiService: ApiService
  ) { this.currentUser = this.authenticationService.currentUserValue; }

  ngOnInit() {
    this.loadAllUsers();
  }
 
  deleteUser(id: number) {
    this.apiService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.apiService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
  }
}
