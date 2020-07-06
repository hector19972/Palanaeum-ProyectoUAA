import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../services/policy.service';
import { Policy } from '../../models/policy.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css'],
})
export class PolicyListComponent implements OnInit {
  forma: FormGroup;
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
    this.forma = new FormGroup({
      'codigoLibro': new FormControl(),
      'nombre': new FormControl(),
      'autor': new FormControl(),
      'editor': new FormControl(),
      'url': new FormControl(),
      'copias': new FormControl()
    })
  }

  ngOnInit() {
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
  create(policy: Policy) {
    this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }
  guardarCambios(): void {
    //console.log(this.forma.value);
    //console.log(this.forma.get('policyNumber').value);
    //this.policiesguardar=this.forma.value as Policy;
    crear: Policy;
    /*this.policyService.getPolicies().subscribe((data) => {
      this.policiesguardar = data.map((e) => {
        return {
          id: null,
          policyNumber: this.forma.value('policyNumber'),
          creationDate: this.forma.value('creationDate'),
          effectiveDate:null,
          expireDate:this.forma.value('expireDate'),
          paymentOption:null,
          policyAmount:this.forma.value('policyAmount'),
          extraInfo:null
        } as Policy;
      });
    });*/
    //this.policiesguardar.id=this.forma.get('policyNumber').value;//this.forma.value('policyNumber');

    this.policiesguardar.nombre = this.forma.get('nombre').value as string;
    this.policiesguardar.autor = this.forma.get('autor').value as string;
    this.policiesguardar.editor = this.forma.get('editor').value as string;
    this.policiesguardar.url = this.forma.get('url').value as string;
    this.policiesguardar.copias = this.forma.get('copias').value as string;

    this.create(this.policiesguardar);
  }
}
