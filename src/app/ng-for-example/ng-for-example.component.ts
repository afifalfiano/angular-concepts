import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  people: any[] = [
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
