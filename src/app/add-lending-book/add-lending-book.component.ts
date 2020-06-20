import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-add-lending-book',
  templateUrl: './add-lending-book.component.html',
  styleUrls: ['./add-lending-book.component.css']
})
export class AddLendingBookComponent implements OnInit {
  bookForm: FormGroup;
  title = '';
  author = '';
  genre = '';
  isLoadingResults = false;

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'author' : [null, Validators.required],
      'genre' : [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addLendingBook(this.bookForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/show-lending-book', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
