import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { PoliticasComponent } from './components/politicas/politicas.component';

@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe,
    HomeComponent,
    NavbarComponent,
    LoadingComponent,
    FooterComponent,
    ContactoComponent,
    PreguntasComponent,
    SearchComponent,
    LoginComponent,
    AboutComponent,
    PoliticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
