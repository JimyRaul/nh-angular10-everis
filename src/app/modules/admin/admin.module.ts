import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookCreatePageComponent } from './pages/book-create-page/book-create-page.component';


@NgModule({
  declarations: [LoginPageComponent, BookListPageComponent, BookCreatePageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
