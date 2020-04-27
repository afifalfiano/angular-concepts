import { Joke } from './../joke';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styles: [
  ]
})
export class JokeListComponent implements OnInit {

  jokes : Joke[];
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
   }

  deleteJoke(joke) {
    let indexToDelete = this.jokes.indexOf(joke);
    if(indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }
  ngOnInit(): void {
  }

}
