import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {
  constructor() { }
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

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'greem';
      case 'ID':
        return 'yellow';
      case 'US':
        return 'red';
    }
  }

  ngOnInit(): void {
  }

}
