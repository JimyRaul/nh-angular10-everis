import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReserveCountComponent } from './book-reserve-count.component';

describe('BookReserveCountComponent', () => {
  let component: BookReserveCountComponent;
  let fixture: ComponentFixture<BookReserveCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReserveCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReserveCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
