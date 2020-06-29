import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  correo: string;
  contraseña: string;
  constructor(private usuarioNuevo: UsuariosService, private router: Router) {

    this.forma = new FormGroup({
      'correo': new FormControl(),
      'contraseña': new FormControl(),
    });

  }
  ngOnInit(): void {
  }
  IngresarConUsuario() {
    this.contraseña = this.forma.get('contraseña').value ;
    this.correo = this.forma.get('correo').value;
    this.Ingresar(this.correo, this.contraseña);
  }
  Ingresar(correo: string, contraseña: string) {
    console.log(correo);
    this.usuarioNuevo.IniciarSecion(correo, contraseña);
    this.router.navigate(['home']);
  }

}
