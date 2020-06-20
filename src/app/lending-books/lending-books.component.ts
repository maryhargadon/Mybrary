import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LendingBook } from '../lendingBook';

@Component({
  selector: 'app-lending-books',
  templateUrl: './lending-books.component.html',
  styleUrls: ['./lending-books.component.css']
})
export class LendingBooksComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author'];
  data: LendingBook[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getBooks()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
