import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Joke } from '../joke';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styles: [
  ]
})
export class JokeComponent implements OnInit {

  constructor() { }
  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

  ngOnInit(): void {
  }

}
