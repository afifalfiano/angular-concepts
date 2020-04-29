import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img [appCcRollover]="{
      'initial':'https://unsplash.it/200/300?image=201',
      'over':'https://unsplash.it/200/300?image=202'
    }" />
  `,
  styles: []
})
export class AppComponent {
  title = 'CustomDirective';
}
