import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutComponent } from './pages/layout/layout.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SuscribeFormComponent } from './components/suscribe-form/suscribe-form.component';
import { SuscribeService } from './services/suscribe.service';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { SharedModule as PrimeSharedModule } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LayoutAdminComponent,
    SuscribeFormComponent,
    HeaderAdminComponent,
    FooterAdminComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeSharedModule,
    MenubarModule,
  ],
  providers: [
    SuscribeService, // {provide: SuscribeService, useClass: SuscribeService}
  ]
})
export class LayoutModule {

}
