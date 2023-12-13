import {Component, inject, Injectable, Input} from '@angular/core';
import {delay, map, Observable, of, shareReplay, startWith, tap} from 'rxjs';
import {AsyncPipe, UpperCasePipe} from '@angular/common';
import {UpperCaseParagraphComponent} from './uppercase-paragraph.component';

@Component({
  selector: 'rxjs-component',
  template: `
      <h1>RxJS</h1>
      <p>Current user: {{ userProfile$ | async }}</p>
      <!-- TODO 1 fix compiler error -->
      <uppercase-paragraph [text]="(userProfile$ | async) ?? ''" />

      <button (click)="updateProfile()">Update Profile</button>
  `,
  imports: [
    AsyncPipe,
    UpperCasePipe,
    UpperCaseParagraphComponent
  ],
  standalone: true
})
export class RxJsComponent {
  public userProfile$ = inject(UserProfileService).loadUserProfile().pipe(
    // TODO 2 shareReplay
    // shareReplay()

    // TODO 4 add start with
    // startWith('UNKNOWN')
  );

  public updateProfile() {
    // TODO 5 how to get current user profile here
  }
}

@Injectable({providedIn: 'root'})
class UserProfileService {
  loadUserProfile(): Observable<string> {
    return of('Test User').pipe(
      tap(() => console.log('loadUserProfile')),
      // TODO 3 enable delay
      // delay(2000)
    )
  }
}
