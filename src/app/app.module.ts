import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RadialComponent } from './Radial.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, RadialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
