import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLendingBookComponent } from './add-lending-book.component';

describe('AddLendingBookComponent', () => {
  let component: AddLendingBookComponent;
  let fixture: ComponentFixture<AddLendingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLendingBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLendingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
