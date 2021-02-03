import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
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
