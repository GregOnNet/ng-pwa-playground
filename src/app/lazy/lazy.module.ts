import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyRoutingModule } from './lazy-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [CommonModule, LazyRoutingModule],
  declarations: [WelcomeComponent]
})
export class LazyModule {}
