import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component'
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
=======
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';

>>>>>>> e34e019fbf052d170783ca3c8d8a2878a5024539
const routes: Routes = [
  {
    path: '',
    component: BookListPageComponent
  },
  {
    path: ':id',
    component: BookDetailPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
