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

  newTitle: string;
  newAuthor: string;
  newGenre: string;

  constructor() { }

  ngOnInit() {}


  addBook() {
    let book = new Book(this.newTitle, this.newAuthor, this.newGenre);
    this.books.push(book);
  }

}
