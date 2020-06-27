import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { PooComponent } from './poo/poo.component';
import { PeeComponent } from './pee/pee.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
