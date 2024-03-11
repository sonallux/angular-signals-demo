import {Component} from '@angular/core';
import {CounterComponent} from './counter.component';

@Component({
  selector: 'app-counter-demo',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <h1>Counter Demo</h1>
    <app-counter [(value)]="counterValue" label="Demo"></app-counter>
    <p>Current value: {{counterValue}}</p>
    <button (click)="counterValue = 0">reset</button>
  `
})
export class CounterDemoComponent {
  // TODO Rewrite using Signals
  // counterValue = signal(0);

  counterValue = 0;
}


