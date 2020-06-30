import { Component, OnInit } from '@angular/core';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';
import { Policy } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/services/policy.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit {
  bandera: boolean;
  policies: Policy[];
  policiesguardar: Policy = {
    codigoLibro: '',
    nombre: '',
    autor: '',
    editor: '',
    url: '',
    copias: ''
  };
  constructor(private policyService: PolicyService) {
    this.bandera = true;
  }

  ngOnInit(): void {
    this.policyService.getPolicies().subscribe((data) => {
      this.policies = data.map((e) => {
        return {
          codigoLibro: e.payload.doc.id,
          nombre: e.payload.doc.data().nombre,
          autor: e.payload.doc.data().autor,
          editor: e.payload.doc.data().editor,
          url: e.payload.doc.data().url,
          copias: e.payload.doc.data().copias,
        } as Policy;
      });
    });
  }



}
