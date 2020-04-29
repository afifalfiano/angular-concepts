import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-non-bindable-example',
  templateUrl: './ng-non-bindable-example.component.html',
  styleUrls: ['./ng-non-bindable-example.component.css']
})
export class NgNonBindableExampleComponent implements OnInit {

  name = 'Afif';
  constructor() { }

  ngOnInit(): void {
  }

}
