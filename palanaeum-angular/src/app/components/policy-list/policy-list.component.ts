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
    id: '',
    policyNumber: '',
    creationDate: '',
    effectiveDate: '',
    expireDate: '',
    paymentOption: '',
    policyAmount: '',
    extraInfo: ''
  };

  constructor(private policyService: PolicyService) {
    this.forma = new FormGroup({
      'policyNumber': new FormControl(),
      'creationDate': new FormControl(),
      'expireDate': new FormControl(),
      'policyAmount': new FormControl(),
    })
  }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data) => {
      this.policies = data.map((e) => {
        return {
          id: e.payload.doc.id,
          policyNumber: e.payload.doc.data().policyNumber,
          creationDate: e.payload.doc.data().creationDate,
          effectiveDate: e.payload.doc.data().effectiveDate,
          expireDate: e.payload.doc.data().expireDate,
          paymentOption: e.payload.doc.data().paymentOption,
          policyAmount: e.payload.doc.data().policyAmount,
          extraInfo: e.payload.doc.data().extraInfo
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
    this.policiesguardar.policyNumber = this.forma.get('policyNumber').value as string;
    this.policiesguardar.creationDate = this.forma.get('creationDate').value as string;
    this.policiesguardar.expireDate = this.forma.get('expireDate').value as string;
    this.policiesguardar.policyAmount = this.forma.get('policyAmount').value as string;
    this.create(this.policiesguardar);
  }
}
