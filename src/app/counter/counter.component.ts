import {Component, EventEmitter, input, Input, model, output, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <span>{{label}}</span>
    <button (click)="decrement()">Decrement</button>
    <span>{{value}}</span>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  // TODO 1 Rewrite using input()
  //label = input('Counter')
  @Input()
  label = 'Counter';

  // TODO 3 Rewrite using model()
  //value = model(0);
  @Input()
  value = 0;

  // TODO 2 Rewrite using output()
  //valueChange = output<number>();
  @Output()
  valueChange = new EventEmitter<number>();

  decrement() {
    // TODO
    // this.value.update(x => x - 1);
    this.value--;
    this.valueChange.emit(this.value)
  }

  increment() {
    // TODO
    // this.value.update(x => x + 1);
    this.value++;
    this.valueChange.emit(this.value)
  }
}
