import { Component, SimpleChanges } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from './models/policy.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'palanaeum-angular';

  constructor(private servUsrs: UsuariosService) { }

  artistas: any[] = [];
  bandera: boolean;
  usuarioLogueado: Usuario = {
    uid: '',
    nombre: '',
    ApPaterno: '',
    ApMaterno: '',
    correo: '',
    contraseña: '',
    rol:''
  };
  usuario: Usuario = {
    uid: '',
    nombre: '',
    ApPaterno: '',
    ApMaterno: '',
    correo: '',
    contraseña: '',
    rol:''
  };

  ngOnInit(): void {
    /*
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
        this.usuario = this.servUsrs.optenerDatos(uid);
        console.log('1  ', this.usuario);
        console.log('2  ', this.servUsrs.optenerDatos(uid));
        //return usuario;
        this.usuarioLogueado=this.usuario;
        console.log('inicio componentes', this.usuarioLogueado);
      } else {
        // User is signed out.
        // ...
      }
    });*/

  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.usuarioLogueado = this.servUsrs.optenerUsuario();
    console.log('cambios', this.servUsrs.optenerUsuario());

  }
}
