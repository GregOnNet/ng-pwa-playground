import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
