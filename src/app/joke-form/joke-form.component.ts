import { Component, OnInit, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
  // encapsulation: ViewEncapsulation.None // This function make all of class card change
  // encapsulation: ViewEncapsulation.ShadowDom // This method make this component denied global styles from bootstrap
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();
  constructor() { }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
  ngOnInit(): void {
  }

}
