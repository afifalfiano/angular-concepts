import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {

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
