import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLendingBookComponent } from './show-lending-book.component';

describe('ShowLendingBookComponent', () => {
  let component: ShowLendingBookComponent;
  let fixture: ComponentFixture<ShowLendingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLendingBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLendingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
