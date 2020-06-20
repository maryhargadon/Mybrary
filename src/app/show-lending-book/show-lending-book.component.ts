import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { LendingBook } from '../lendingBook';

@Component({
  selector: 'app-show-lending-book',
  templateUrl: './show-lending-book.component.html',
  styleUrls: ['./show-lending-book.component.css']
})
export class ShowLendingBookComponent implements OnInit {

  lendingBook: LendingBook = { _id: '', title: '', author: '', genre: '', updatedAt: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.id);
  }

  getBookDetails(id: any) {
    this.api.getBook(id)
      .subscribe((data: any) => {
        this.lendingBook = data;
        console.log(this.lendingBook);
        this.isLoadingResults = false;
      });
  }

  deleteBook(id: any) {
    this.isLoadingResults = true;
    this.api.deleteBook(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/lending-books']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }


}
