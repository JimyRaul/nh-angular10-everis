import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-reserve-count',
  templateUrl: './book-reserve-count.component.html',
  styleUrls: ['./book-reserve-count.component.scss']
})
export class BookReserveCountComponent implements OnInit {

  @Input() reservedBooks: IBook[];
  @Input() books: IBook[];

  constructor() { }

  ngOnInit(): void { }

  countBook(book: IBook): number{
    return this.reservedBooks.filter(l => l.id === book.id).length;
  }

}
