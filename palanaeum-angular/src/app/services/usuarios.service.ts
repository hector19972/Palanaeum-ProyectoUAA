import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../models/policy.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: AngularFirestore) { }

  RegistrarUsuario(usuarioR: Usuario) {
    firebase.auth().createUserWithEmailAndPassword(usuarioR.correo, usuarioR.contraseña).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
    /*
    firebase.auth().signInWithEmailLink(usuarioR.correo, usuarioR.contraseña).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log(usuarioR.correo, usuarioR.contraseña);
    });
    */
    console.log('Hola');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        // User is signed in.
        // tslint:disable-next-line: prefer-const
        let usuario: Usuario = {
          uid: '',
          nombre: '',
          ApPaterno: '',
          ApMaterno: '',
          correo: '',
          contraseña: '',
          rol: ''
        };
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let providerData = user.providerData;
        // ...
        console.log(user.uid);
        usuario.uid = user.uid;
        usuario.nombre = usuarioR.nombre;
        usuario.ApPaterno = usuarioR.ApPaterno;
        usuario.ApMaterno = usuarioR.ApMaterno;
        usuario.correo = usuarioR.correo;
        this.firestore.collection('Usuarios').doc(usuario.uid).set(usuario);
      } else {
        // User is signed out.
        // ...
      }
    });
  }

  optenerUsuario() {
    let usuario: Usuario = {
      uid: '',
      nombre: '',
      ApPaterno: '',
      ApMaterno: '',
      correo: '',
      contraseña: '',
      rol: ''
    };

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
        usuario = this.optenerDatos(uid);
        console.log('1  ', usuario);
        console.log('2  ', this.optenerDatos(uid));
        //return usuario;
      } else {
        // User is signed out.
        // ...
      }
    });

    return usuario as Usuario;
  }

  CerrarSecion() {
    console.log('Cerrando cesion');
    firebase.auth().signOut().catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
  }
  IniciarSecion(correo, contraseña) {
    firebase.auth().signInWithEmailAndPassword(correo, contraseña).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log(correo, contraseña);
    });
  }

  optenerDatos(uid: string) {
    let usuario: Usuario = {
      uid: '',
      nombre: '',
      ApPaterno: '',
      ApMaterno: '',
      correo: '',
      contraseña: '',
      rol: ''
    };
    let usrRef = this.firestore.collection('Usuarios').doc(uid);
    let getDoc = usrRef.get()
      .subscribe((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          usuario.uid = doc.data().uid as string;
          usuario.nombre = doc.data().nombre;
          usuario.ApPaterno = doc.data().ApPaterno;
          usuario.ApMaterno = doc.data().ApMaterno;
          usuario.correo = doc.data().correo;
          usuario.contraseña = 'saludos';
          usuario.rol = doc.data().rol;
          //console.log(doc.data().uid as string, usuario);
          return usuario;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }); /* .(function (error) {
      console.log("Error getting document:", error);
    });*/

    return usuario;
  }
}
