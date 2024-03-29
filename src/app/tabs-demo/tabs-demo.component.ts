import {Component, signal} from '@angular/core';
import {TabbedPaneComponent, TabComponent} from "./tabs.component";

@Component({
  selector: 'app-tabs-demo',
  standalone: true,
  template: `
    <h1>Tabs Demo</h1>

    <div class="pane-container">

      <app-tabbed-pane [(current)]="current">
        <app-tab title="1st tab">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam at quam facilis ducimus maxime
          suscipit numquam quidem quis autem? Dicta consequuntur a, laudantium iusto unde praesentium inventore fugit
          quibusdam.
        </app-tab>
        <app-tab title="2nd tab">
          Sammas ergo gemma, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam at quam facilis
          ducimus maxime suscipit numquam quidem quis autem? Dicta consequuntur a, laudantium iusto unde praesentium
          inventore fugit quibusdam.
        </app-tab>
        <app-tab title="3nd tab">
          Gemma ham ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam at quam facilis ducimus
          maxime suscipit numquam quidem quis autem? Dicta consequuntur a, laudantium iusto unde praesentium inventore
          fugit quibusdam.
        </app-tab>
      </app-tabbed-pane>

      <p class="current-info">
        Current: {{ current() }}
      </p>


    </div>
  `,
  styles: `
    .pane-container {
      max-width: 600px;
    }
    .current-info {
      margin-top: 20px;
    }
    `,
  imports: [TabbedPaneComponent, TabComponent]
})
export class TabsDemoComponent {
  current = signal(0);
}
