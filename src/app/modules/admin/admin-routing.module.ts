import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreatePageComponent } from './pages/book-create-page/book-create-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookListPageComponent
  },
  {
    path: 'books/add',
    component: BookCreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
