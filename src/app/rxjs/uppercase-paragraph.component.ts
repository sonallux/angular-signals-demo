import {Component, Input} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'uppercase-paragraph',
  template: '<p>{{text | uppercase }}</p>',
  imports: [
    UpperCasePipe
  ],
  standalone: true
})
export class UpperCaseParagraphComponent {
  @Input({required: true}) text!: string;
}
