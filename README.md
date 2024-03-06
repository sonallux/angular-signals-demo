# Angular Signals Demo

- Video [In-depth Angular Signals, mental models for reactive graph, push / pull, laziness and more! 🚥](https://www.youtube.com/watch?v=sbIlz-yuxQI)

## Functions

### `signal()` - stable since 17.0

Creates a writeable signal, that can be updated using `x.set()` or `x.update()` methods.

```ts
const counter = signal(0);

counter.set(2);
counter.update(count => count + 1);
```

### `computed()` - stable since 17.0

Memoizing signal, which calculates its value from the values of other signals. A computed signal is not writable.

```ts
const counter = signal(0);

// Automatically updates when `counter` changes:
const isEven = computed(() => counter() % 2 === 0);
```

### `effect()` - developer preview since 17.0

Get notified when signals have changed their value.

````ts
const counter = signal(0);
effect(() => console.log('The counter is:', counter()));
// The counter is: 0

counter.set(1);
// The counter is: 1
````

### `input()` - developer preview - since 17.1

Signal input is a signal-based alternative to the traditional `@Input` decorator

```ts
@Component({
  template: `<h1>Counter value: {{ value() }}</h1>`,
})
export class Component {
  // returns Signal<number>
  value = input(0);
  
  // returns Signal<string>
  firstName = input.required<string>();

  // returns Signal<string | undefined>
  lastName = input<string>();
}
```

### Signal queries - developer preview since 17.2

Signal queries are a signal-based alternative to the traditional `@ViewChild`, `@ViewChildren`, `@ContentChild` or `@ContentChildren` decorator

```ts
import {contentChild, contentChildren, viewChild, viewChildren} from '@angular/core';

@Component({
  template: `
  <div #el>element to query</div>
  <ng-content></ng-content>
  `
})
export class Component {
  // returns Signal<ElementRef<HTMLDivElement> | undefined>
  divEl = viewChild<ElementRef<HTMLDivElement>>('el');

  // returns Signal<ElementRef<HTMLDivElement>>
  divElRequired = viewChild.required<ElementRef<HTMLDivElement>>('el');

  // returns Signal<ReadonlyArray<ElementRef<HTMLDivElement>>>
  divEls = viewChildren<ElementRef<HTMLDivElement>>('el');

  // returns Signal<TestComponent | undefined>
  testComponent = contentChild(TestComponent);

  // returns Signal<TestComponent>
  testComponentRequired = contentChild.required(TestComponent);
  
  // returns Signal<ReadonlyArray<TestComponent>>
  testComponents = contentChildren(TestComponent)
}
```

### `model()` signals - developer preview since 17.2

Model inputs are exposed as input/output pair to be used by the parent component.

```ts
@Component({
  selector: 'custom-checkbox',
  template: `
    <div class="cool-checkbox-treatment">
      <input type="checkbox" (click)="toggle()" [value]="checked()">
    </div>
  `
})
export class CustomCheckbox {
  protected checked = model(false);

  toggle() {
    this.checked.set(!this.checked());
  }
}
```

