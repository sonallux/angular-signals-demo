import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <button (click)="decrement()">Decrement</button>
    <span>{{value}}</span>
    <button (click)="increment()">Decrement</button>
  `
})
export class CounterComponent {
  // TODO Rewrite using signals
  // value = model(0);

  @Input()
  value = 0;

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
