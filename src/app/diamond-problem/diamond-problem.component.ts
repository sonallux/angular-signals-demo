import {Component} from '@angular/core';
import {BehaviorSubject, combineLatest, map, of, tap} from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';

const DEFAULT_ITEMS = ['Apple', 'Banana', 'Kiwi', 'Pear', 'Peach']

@Component({
  selector: 'diamond-problem-component',
  template: `
      <h1>Diamond Problem</h1>
      <div>
          <span>Filter: </span>
          <input type="text" #filterInput [value]="filter$ | async" (input)="filter$.next(filterInput.value)"/>
          <button (click)="reset()">Reset</button>
      </div>
      <h3>Filtered Items</h3>
      <ul>
          @for (item of filteredItems$ | async;track item) {
              <li>{{ item }}</li>
          }
      </ul>
  `,
  standalone: true,
  imports: [FormsModule, AsyncPipe]
})
export class DiamondProblemComponent {
  items$ = new BehaviorSubject([...DEFAULT_ITEMS]);
  filter$ = new BehaviorSubject('');

  filteredItems$ = combineLatest([this.items$, this.filter$]).pipe(
    // TODO 1 How often is the filter triggered on reset()
    // tap(([items, filter]) => console.log(`items=${items} filter=${filter}`)),
    map(([items, filter]) =>
      items.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    )
  )

  reset() {
    this.items$.next([...DEFAULT_ITEMS]);
    this.filter$.next('')
  }
}
