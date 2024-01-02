import { Component, computed, effect, signal } from "@angular/core";

@Component({
  standalone: true,
  template: `
    <h1>Signals</h1>

    <p>Counter: {{counter()}}</p>
    <p>Multiple of 5: {{isMultipleOf5()}}</p>

    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
    <button (click)="log()">Log</button>
  `
})
export class SignalsComponent{
  // TODO 1 create signal
  counter = signal(0);

  // TODO 5 computed signal
  isMultipleOf5 = computed(() => this.counter() % 5 === 0);

  constructor() {
    // TODO 6 side effects
    effect(() => console.log('Is multiple of 5: ' + this.isMultipleOf5()))
  }

  reset() {
    // TODO 2 set value
    this.counter.set(0);
  }

  increment() {
    // TODO 3 set value
    this.counter.update(value => value + 1);
  }

  log() {
    // TODO 4 get current value
    console.log(this.counter());
  }
}
