import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  artistas: any[] = [];
  bandera: boolean;
  banderaNombre: boolean=false;

  ngOnInit(): void {
  }

  buscarArtista(termino: string){
    this.router.navigate(['/buscador',termino]);
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
