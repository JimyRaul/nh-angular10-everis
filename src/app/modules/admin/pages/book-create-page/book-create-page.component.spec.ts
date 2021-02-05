import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreatePageComponent } from './book-create-page.component';

describe('BookCreatePageComponent', () => {
  let component: BookCreatePageComponent;
  let fixture: ComponentFixture<BookCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
