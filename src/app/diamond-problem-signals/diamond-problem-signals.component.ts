import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

const DEFAULT_ITEMS = ['Apple', 'Banana', 'Kiwi', 'Pear', 'Peach']

@Component({
  selector: 'diamond-problem-signals-component',
  template: `
      <h1>Diamond Problem with Signals</h1>

      <form (submit)="addItem(addItemInput.value)">
        <input type="text" #addItemInput>
        <button type="submit">Add item</button>
      </form>

      <div>
        <span>Filter: </span>
        <input type="text" #filterInput [value]="filter()" (input)="filter.set(filterInput.value)"/>
      </div>
      <button (click)="reset()">Reset</button>
      <h3>Filtered Items</h3>
      <ul>
        @for (item of filteredItems(); track item) {
          <li>{{ item }}</li>
        }
      </ul>
  `,
  standalone: true,
  imports: [FormsModule]
})
export class DiamondProblemSignalsComponent {
  items = signal([...DEFAULT_ITEMS]);
  filter = signal('');

  filteredItems = computed(() => {
    // TODO 1 How often is the filter triggered on reset()
    console.log(`items=${this.items()} filter=${this.filter()}`);
    const lowerCaseFilter = this.filter().toLowerCase();
    return this.items().filter(item => item.toLowerCase().includes(lowerCaseFilter))
  })

  reset() {
    this.items.set([...DEFAULT_ITEMS]);
    this.filter.set('');
  }

  addItem(item: string) {
    this.items.update(items => [...items, item]);
  }
}
