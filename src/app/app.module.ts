import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { PipeAsyncComponent } from './pipe-async/pipe-async.component';
import { DefaultPipe } from './default.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    PipeAsyncComponent,
    DefaultPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
