import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/policy.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;
  auxUsuario: Usuario = {
    uid: '',
    nombre: '',
    ApPaterno: '',
    ApMaterno: '',
    correo: '',
    contraseña: '',
    rol: ''
  };

  constructor(private usuarioNuevo: UsuariosService, private router: Router) {
    this.forma = new FormGroup({
      'nombre': new FormControl(),
      'apPaterno': new FormControl(),
      'apMaterno': new FormControl(),
      'correo': new FormControl(),
      'contraseña': new FormControl(),
      'contraseñaR': new FormControl(),
      'terminos': new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  create(usuario: Usuario) {
    this.usuarioNuevo.RegistrarUsuario(usuario);
    this.router.navigate(['home']);
  }
  registrarUsuario() {
    console.log("Formulario enviado");
    this.auxUsuario.nombre = this.forma.get('nombre').value as string;
    this.auxUsuario.ApPaterno = this.forma.get('apPaterno').value as string;
    this.auxUsuario.ApMaterno = this.forma.get('apMaterno').value as string;
    this.auxUsuario.correo = this.forma.get('correo').value as string;
    this.auxUsuario.contraseña = this.forma.get('contraseña').value as string;
    this.create(this.auxUsuario);
  }

}
