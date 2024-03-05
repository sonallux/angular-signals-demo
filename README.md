# Angular Signals Demo

- Video [In-depth Angular Signals, mental models for reactive graph, push / pull, laziness and more! 🚥](https://www.youtube.com/watch?v=sbIlz-yuxQI)

## Functions

### `signal()` - stable

Creates a writeable signal, that can be updated using `x.set()` or `x.update()` methods.

```ts
const counter = signal(0);

counter.set(2);
counter.update(count => count + 1);
```

### `computed()` - stable

Memoizing signal, which calculates its value from the values of other signals. A computed signal is not writable.

```ts
const counter = signal(0);

// Automatically updates when `counter` changes:
const isEven = computed(() => counter() % 2 === 0);
```

### `effect()` - developer preview

Get notified when signals have changed their value.

````ts
const counter = signal(0);
effect(() => console.log('The counter is:', counter()));
// The counter is: 0

counter.set(1);
// The counter is: 1
````

### `input()` - developer preview

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

### Signal queries - developer preview

Signal queries are a signal-based alternative to the traditional `@ViewChild` and `@ViewChildren` decorator

```ts
@Component({
  template: `<div #el>element to query</div>`
})
export class Component {
  // returns Signal<ElementRef<HTMLDivElement> | undefined>
  divEl = viewChild<ElementRef<HTMLDivElement>>('el');

  // returns Signal<ElementRef<HTMLDivElement>> and ensures that the signal value is not undefined
  divElReq = viewChild.required<ElementRef<HTMLDivElement>>('el');

  // returns Signal<readonly ElementRef<HTMLDivElement>[]>
  divEls = viewChildren('el');
}
```

### `model()` signals - developer preview

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

