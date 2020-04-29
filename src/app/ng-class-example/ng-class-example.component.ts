import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {
  people: any[] = [
    {
      name : 'Afif',
      age: 20,
      country: 'ID'
    },
    {
      name : 'Alfiano',
      age: 21,
      country: 'ID'
    },
    {
      name : 'Rafi',
      age: 15,
      country: 'ID'
    },
    {
      name : 'Paijo',
      age: 30,
      country: 'UK'
    },
    {
      name : 'Budi',
      age: 25,
      country: 'US'
    },
    {
      name : 'Budi',
      age: 25,
      country: 'SG'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
