import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  dateVal = new Date();
  // tslint:disable-next-line:ban-types
  list: Object = [
    {
      name: 'foo',
      date: {
        id: 'nice',
        like: 'moo'
      }
    }
  ];

  listArray: Array<number> = [1, 23, 41, 41, 23];
  constructor() { }

  ngOnInit(): void {
  }

}
