import { 
  Component, 
  EventEmitter, 
  OnInit, 
  Output, 
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges


 } from '@angular/core';
import { Joke } from '../joke';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styles: [
  ]
})
export class JokeComponent implements 
                                      OnInit, OnChanges,
                                      DoCheck,
                                      AfterContentInit,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked,
                                      OnDestroy {

  constructor() {
    console.log(`new - data is ${this.data}`);
   }
  ngOnChanges(changes:SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.data}`);
    for(let key in changes) {
      console.log(`${key} changed,
      Current: ${changes[key].currentValue},
      Previous: ${changes[key].previousValue}}`);
    }
  }
  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

  ngOnChange() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngOnInit(){
    console.log(`ngOnInit - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log(`ngDoCHeck - data is ${this.data}`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }

}
