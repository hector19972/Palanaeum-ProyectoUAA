import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { QrcodigoComponent } from './components/qrcodigo/qrcodigo.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegistroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'qrcodigo', component: QrcodigoComponent },
  { path: 'CRUD', component: PolicyListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
