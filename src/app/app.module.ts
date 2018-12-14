import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalkeeperComponent } from './goalkeeper/goalkeeper.component';
import { KickTakerComponent } from './kick-taker/kick-taker.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalkeeperComponent,
    KickTakerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
