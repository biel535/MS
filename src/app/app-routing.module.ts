import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { OmnieComponent } from './components/omnie/omnie.component';
import { BlogComponent } from './components/blog/blog.component';

import { ModalComponent } from './components/modal/modal.component';
import { Oferta1Component } from './components/oferta1/oferta1.component';
import { Oferta2Component } from './components/oferta2/oferta2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'omnie',
    component: OmnieComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: 'oferta1',
    component: Oferta1Component,
  },
  {
    path: 'oferta2',
    component: Oferta2Component,
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export { Routes };

