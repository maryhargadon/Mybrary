import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  myBooks = [
    new Book("Frankenstien", "Mary Shelly", "Science Fiction"),
    new Book("Swamp Thing", "Allan Moore", "Graphic Novel")
  ];

}
