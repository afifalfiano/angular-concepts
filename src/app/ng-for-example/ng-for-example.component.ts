import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  people: any[] = [
    {
      name : 'Afif',
      age: 20
    },
    {
      name : 'Alfiano',
      age: 21
    },
    {
      name : 'Rafi',
      age: 15
    },
    {
      name : 'Paijo',
      age: 30
    },
    {
      name : 'Budi',
      age: 25
    },
  ];

  countryGroup: any[] = [
    {
      country: 'ID',
      people: [
        {
          name : 'Afif'
        },
        {
          name : 'Alfiano'
        },
        {
          name : 'Rafi'
        },
        {
          name : 'Paijo'
        },
        {
          name : 'Budi'
        },
      ]
    },
    {
      country: 'SG',
      people: [
        {
          name : 'Afif'
        },
        {
          name : 'Alfiano'
        },
        {
          name : 'Rafi'
        },
        {
          name : 'Paijo'
        },
        {
          name : 'Budi'
        },
      ]
    },
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
