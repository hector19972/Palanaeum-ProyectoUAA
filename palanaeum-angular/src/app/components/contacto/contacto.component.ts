import { Component, OnInit } from '@angular/core';
import { CorreoService } from '../../services/correo.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;
  datos: any;
  mensaje: string;
  asunto: string;
  constructor(private correo: CorreoService) {
    this.forma = new FormGroup({
      'mensaje': new FormControl(),
      'asunto': new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  enviarCorreo(): void {
    console.log('EnviadoCorreo');
    this.mensaje = this.forma.get('mensaje').value;
    this.asunto = this.forma.get('asunto').value;
    let urlapi = `http://localhost:3000/enviar/${this.mensaje}/${this.asunto}`;
    this.correo.enviarCorreo(urlapi).subscribe((data) => {
      console.log(data);
      this.datos = data;
    });
  }

}
