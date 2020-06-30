import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/policy.model';
import * as firebase from 'firebase';
//import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private servUsrs: UsuariosService) { }

  artistas: any[] = [];
  bandera: boolean;
  usuarioLogueado: Usuario = {
    uid: '',
    nombre: '',
    rol: '',
    ApPaterno: '',
    ApMaterno: '',
    correo: '',
    contraseña: '',
  };
  banderaNombre: boolean = false;

  ngOnInit(): void {
    //this.usuarioLogueado = this.servUsrs.optenerUsuario();

    //console.log('inicio', this.servUsrs.optenerUsuario());
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        this.usuarioLogueado = this.servUsrs.optenerDatos(uid);
        console.log('1  ', this.usuarioLogueado);
        console.log('2  ', this.servUsrs.optenerDatos(uid));
        //return usuario;
        console.log('inicio componentes', this.usuarioLogueado);
      } else {
        // User is signed out.
        // ...
      }
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.usuarioLogueado = this.servUsrs.optenerUsuario();
    console.log('cambios' , this.servUsrs.optenerUsuario());

  }


  buscarArtista(termino: string) {
    this.router.navigate(['/buscador', termino]);
  }
  CerrarSecion(){
    // tslint:disable-next-line: no-unused-expression
    this.servUsrs.CerrarSecion();
    this.usuarioLogueado =  {
      uid: '',
      nombre: '',
      ApPaterno: '',
      ApMaterno: '',
      correo: '',
      contraseña: '',
      rol: ''
    };
    console.log('Cerrando secion los valores deverian ser ...', this.usuarioLogueado);
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['home']);
  }

  buscar(termino: string) {
    this.bandera = true;
    console.log(termino);
    /*
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      //console.log(data);
      this.artistas = data;
      this.bandera = false;
      console.log(this.artistas[0].name);
      console.log(this.artistas[0].id);
      if (termino === this.artistas[0].name) {
        console.log("Todo bien");
        this.router.navigate(['/artist',this.artistas[0].id]);
        this.banderaNombre=false;
      }else {
        //alert("Escribiste bien el nombre?");
        this.banderaNombre=true;
        setTimeout(() => this.banderaNombre=false, 2000);
      }
    });
    */

  }

}
