import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AuthenticationService, UserService } from '../_services';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { this.currentUser = this.authenticationService.currentUserValue; }

  ngOnInit() {
    this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
}