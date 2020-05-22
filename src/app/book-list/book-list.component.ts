import { Component, OnInit, Input } from '@angular/core';
import { Books } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: Books[];
  @Input() name: string;

  newTitle: string;
  newAuthor: string;
  newGenre: string;

  constructor() { }

  ngOnInit() {
  }

}
