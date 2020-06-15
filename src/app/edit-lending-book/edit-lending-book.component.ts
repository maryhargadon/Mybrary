import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-edit-lending-book',
  templateUrl: './edit-lending-book.component.html',
  styleUrls: ['./edit-lending-book.component.css']
})
export class EditLendingBookComponent implements OnInit {
  bookForm: FormGroup;
  _id = '';
  title = '';
  author = '';
  genre = '';
  isLoadingResults = false;

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params.id);
    this.bookForm = this.formBuilder.group({
    'title' : [null, Validators.required],
    'author' : [null, Validators.required],
    'genre' : [null, Validators.required]
  });
}

getBook(id: any) {
  this.api.getBook(id).subscribe((data: any) => {
    this._id = data._id;
    this.bookForm.setValue({
      title: data.title,
      author: data.author,
      genre: data.genre
    });
  });
}

onFormSubmit() {
  this.isLoadingResults = true;
  this.api.updateBook(this._id, this.bookForm.value)
    .subscribe((res: any) => {
      const id = res._id;
      this.isLoadingResults = false;
      this.router.navigate(['/show-lending-book', id]);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    }
  );
}

bookDetails() {
  this.router.navigate(['/show-lending-book', this._id]);
}
}
