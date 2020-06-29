import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private httpClient: HttpClient) { }

  enviarCorreo(url: string) {
    return this.httpClient.get(url);
    //console.log(url);
    //return null;
  }
}
