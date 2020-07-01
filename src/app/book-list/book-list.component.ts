import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: Book[];
  @Input() name: string;

  newItem: string;
  newDescription: string;
  

  constructor() { }

  ngOnInit() {}


  addBook() {
    let book = new Book(this.newItem, this.newDescription);
    this.books.push(book);
  }

  myBooks = [
    new Book("Frankenstien", "Mary Shelly"),
    new Book("Swamp Thing", "Allan Moore")
  ];


}
