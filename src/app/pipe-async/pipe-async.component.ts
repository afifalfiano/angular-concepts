import { DefaultPipe } from './../default.pipe';
import { Component, OnInit } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';


@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.css']
})
export class PipeAsyncComponent implements OnInit {
  promiseData: Promise<any>;
  // tslint:disable-next-line:no-inferrable-types
  imgUrl: string = '';
  // tslint:disable-next-line:ban-types
  observableData: Observable<object>;
  constructor() {
    this.promiseData = this.getPromise();
    // this.observableData = this.getObservable();
   }

  ngOnInit(): void {
  }

  // getObservable(){
  //   return Observable
  //     .interval(1000)
  //     .take(10)
  //     .map((v) => v * v);
  // }

  getPromise(){
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve('Promise Complete!'), 3000);
    });
  }

}
