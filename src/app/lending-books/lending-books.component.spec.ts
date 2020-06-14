import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingBooksComponent } from './lending-books.component';

describe('LendingBooksComponent', () => {
  let component: LendingBooksComponent;
  let fixture: ComponentFixture<LendingBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
