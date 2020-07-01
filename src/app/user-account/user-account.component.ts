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

  isShowBooksIf = true;

  toggleDisplayBooksIf() {
    this.isShowBooksIf = !this.isShowBooksIf;
  }

  isShowMusicIf = true;

  toggleDisplayMusicIf() {
    this.isShowMusicIf = !this.isShowMusicIf;
  }

  isShowNewIf = true;

  toggleDisplayNewIf() {
    this.isShowNewIf = !this.isShowNewIf;
  }

  myBooks = [
    new Book("Doris", "Zines"),
    new Book("Riot Grrl", "Zines"),
    new Book("Blender", "Appliance"),
    new Book("Stack of National Geographics", "Crafts"),
    new Book("Rusty bike", "Transportation"),
    new Book("Pea Coat", "Fancy clothes")
  ];

}
