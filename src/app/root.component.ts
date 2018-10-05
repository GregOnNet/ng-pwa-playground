import { Component } from '@angular/core';

import sample from './sample.json';

@Component({
  selector: 'ct-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  constructor() {
    console.log(sample);
  }
}
