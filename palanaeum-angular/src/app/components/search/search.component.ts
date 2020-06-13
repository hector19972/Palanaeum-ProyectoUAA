import { Component, OnInit } from '@angular/core';
interface Tag {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tags: Tag[] = [
    { value: '0', viewValue: 'Autor' },
    { value: '1', viewValue: 'Editorial' },
    { value: '3', viewValue: 'Nombre' },
  ];
}
