      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { MatGridListModule } from '@angular/material/grid-list';
      import { AppComponent } from './app.component';
      import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
      import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
      import { FormsModule, ReactiveFormsModule } from '@angular/forms';
      import { AppRoutingModule } from './app-routing.module';
      import {MatButtonModule} from '@angular/material/button';
      import {MatCardModule} from '@angular/material/card';
      import { MatDialogModule } from '@angular/material/dialog';
      import {MatFormFieldModule} from '@angular/material/form-field';

      import { HomeComponent } from './components/home/home.component';
      import { HeaderComponent } from './components/header/header.component';
      import { Grid1Component } from './components/grid1/grid1.component';
      import { Grid2Component } from './components/grid2/grid2.component';
      import { ArtykulComponent } from './components/artykul/artykul.component';
      import { BlogComponent } from './components/blog/blog.component';
      import { ContactComponent } from './components/contact/contact.component';
      import { OmnieComponent } from './components/omnie/omnie.component';
      import { FooterComponent } from './components/footer/footer.component';
      import {MatSidenavModule} from '@angular/material/sidenav';
      import { ModalComponent } from './components/modal/modal.component';
      import { ModalchildComponent } from './components/modalchild/modalchild.component';
      import { Oferta1Component } from './components/oferta1/oferta1.component';
      import { Oferta2Component } from './components/oferta2/oferta2.component';




      @NgModule({
        declarations: [
          AppComponent,
          HomeComponent,
          HeaderComponent,
          Grid1Component,
          Grid2Component,
          ArtykulComponent,
          BlogComponent,
          ContactComponent,
          OmnieComponent,
          FooterComponent,
          ModalComponent,
          ModalchildComponent,
          Oferta1Component,
          Oferta2Component,


        ],
        imports: [
          BrowserModule,
          NgbModule,
          BrowserAnimationsModule,
          AppRoutingModule,
          MatGridListModule,
          FormsModule,
          ReactiveFormsModule,
          MatSidenavModule,
          MatButtonModule,
          MatCardModule,
          MatDialogModule,
          MatFormFieldModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
