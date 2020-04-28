import { JokeComponent } from './../joke/joke.component';
import { Joke } from './../joke';
import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styles: [
  ]
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild('header') headerEl: ElementRef;

  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit - jokeViewChild is ${this.jokeContentChild}`);
    }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }

  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ];

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
