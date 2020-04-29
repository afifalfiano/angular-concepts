import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CcRolloverDirective } from './cc-rollover.directive';

@NgModule({
  declarations: [
    AppComponent,
    CcRolloverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
