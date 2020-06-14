import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLendingBookComponent } from './edit-lending-book.component';

describe('EditLendingBookComponent', () => {
  let component: EditLendingBookComponent;
  let fixture: ComponentFixture<EditLendingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLendingBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLendingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
