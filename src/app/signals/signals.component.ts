import { Component, signal } from "@angular/core";

@Component({
  standalone: true,
  template: `
    <h1>Signals</h1>

    <p>Counter: {{counter()}}</p>

    <button (click)="counter.set(1)">Increment</button>
  `
})
export class SignalsComponent{
  counter = signal(0)
}