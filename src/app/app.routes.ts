import {Routes} from '@angular/router';
import {DiamondProblemComponent} from './diamond-problem/diamond-problem.component';
import {RxJsComponent} from './rxjs/rxjs.component';
import {SignalsComponent} from './signals/signals.component';
import {DiamondProblemSignalsComponent} from './diamond-problem-signals/diamond-problem-signals.component';

export const routes: Routes = [
  {
    path: 'rxjs',
    component: RxJsComponent
  },
  {
    path: 'diamond',
    component: DiamondProblemComponent
  },
  {
    path: 'signals',
    component: SignalsComponent
  },
  {
    path: 'diamond-signals',
    component: DiamondProblemSignalsComponent
  }
];
