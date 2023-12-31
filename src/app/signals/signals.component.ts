import { Component, computed, effect, signal } from "@angular/core";

@Component({
  standalone: true,
  template: `
    <h1>Signals</h1>

    <p>Counter: {{counter()}}</p>
    <p>Multiple of 3: {{isMultipleOf3()}}</p>

    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
    <button (click)="log()">Log</button>
  `
})
export class SignalsComponent{
  counter = signal(0);
  isMultipleOf3 = computed(() => this.counter() % 3 === 0);

  constructor(){
    effect(() => console.log('Is multiple of 3: ' + this.isMultipleOf3()))
  }

  increment() {
    this.counter.update(value => value + 1);
  }

  reset() {
    this.counter.set(0);
  }

  log() {
    console.log(this.counter());
  }
}