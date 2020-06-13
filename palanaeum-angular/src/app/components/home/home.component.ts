import { Component, OnInit } from '@angular/core';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
]
})
export class HomeComponent implements OnInit {
  bandera: boolean;
  constructor() {
    this.bandera = true;
   }

  ngOnInit(): void {
  }



}
