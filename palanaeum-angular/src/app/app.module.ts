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
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { QrcodigoComponent } from './components/qrcodigo/qrcodigo.component';

//Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule, MatSelect} from '@angular/material/select';
//QrCode
import { QRCodeModule } from 'angularx-qrcode';

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
    PoliticasComponent,
    QrcodigoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Material
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    //QRCODE
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
