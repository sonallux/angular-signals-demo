import { Component, computed, effect, signal } from "@angular/core";

@Component({
  standalone: true,
  template: `
    <h1>Signals</h1>

    <!-- TODO 2b read signal -->
    <!-- <p>Counter: {{counter()}}</p> -->
    <p>Counter: -1</p>
    <!-- TODO 6 read computed signal -->
    <!-- <p>Multiple of 5: {{isMultipleOf5()}}</p> -->
    <p>Multiple of 5: ???</p>

    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
    <button (click)="log()">Log</button>
  `
})
export class SignalsComponent{
  // TODO 1 create signal
  // counter = signal(0);

  // TODO 5 computed signal
  // isMultipleOf5 = computed(() => this.counter() % 5 === 0);

  constructor() {
    // TODO 7 side effects
    // effect(() => console.log('Is multiple of 5: ' + this.isMultipleOf5()))
  }

  reset() {
    // TODO 3 set value
    // this.counter.set(0);
  }

  increment() {
    // TODO 4 update value
    // this.counter.update(value => value + 1);
  }

  log() {
    // TODO 2a read current value
    // console.log(this.counter());
  }
}
