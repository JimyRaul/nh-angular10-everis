import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

<<<<<<< HEAD
=======

>>>>>>> e34e019fbf052d170783ca3c8d8a2878a5024539
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
<<<<<<< HEAD
  },
=======
  }
>>>>>>> e34e019fbf052d170783ca3c8d8a2878a5024539
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
