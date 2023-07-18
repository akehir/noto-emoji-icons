import { Component, ViewEncapsulation } from '@angular/core';
import {usage, component, ngModule, standaloneComponent} from './code';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'Angular Noto Lazy Loaded Emoji Lib';
  step2 = ngModule;
  step3a = component;
  step3b = standaloneComponent;
  step4 = usage;

  constructor() {}
}
