import {Component, computed, contentChildren, inject, input, model} from '@angular/core';

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  template: `
    <div class="pane">
      <div class="nav" role="group">
        @for(tab of tabs(); track tab) {
        <button
            [class.secondary]="tab !== currentTab()"
            (click)="current.set($index)">
                {{tab.title()}}
        </button>
        }
      </div>
      <article>
        <ng-content></ng-content>
      </article>
    </div>
  `,
  styles: `
    .pane .nav button {
      cursor: pointer;
      text-decoration: none;
      padding: 10px 20px;
    }

    .pane .nav {
      margin-bottom: 10px;
      width:auto;
    }
  `
})
export class TabbedPaneComponent {
  current = model(0);
  tabs = contentChildren(TabComponent);
  currentTab = computed(() => this.tabs()[this.current()]);
}

@Component({
  selector: 'app-tab',
  standalone: true,
  template: `
    @if(visible()) {
      <div class="tab">
        <h2>{{ title() }}</h2>
        <ng-content></ng-content>
      </div>
    }
  `
})
export class TabComponent {
  pane = inject(TabbedPaneComponent);
  title = input.required<string>();
  visible = computed(() => this.pane.currentTab() === this)
}
