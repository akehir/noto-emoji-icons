export const ngModule = `import { NgModule } from '@angular/core';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

@NgModule({
    declarations: [
    ],
    imports: [
      NotoEmojiIconsModule,
    ],
    providers: [],
    bootstrap: [],
})
export class AppModule { }
`;

export const component = `import { Component } from '@angular/core';
import { NotoEmojiIconsRegistry } from '@triangular/noto-emoji-icons';
import {
  notoEmojiU0023,
  // add more icons here
} from '@triangular/noto-emoji-icons/icons';

@Component({
  selector: 'app-some-component-with-icons',
  template: '<noto-emoji name="emoji_u_0023"></noto-emoji>',
  styles: 'svg { color: #ccc; fill: currentColor; width: 5rem; height: 5rem; }',
})
export class SomeComponentWithIcons {

  constructor(private registry: NotoEmojiIconsRegistry) {
    registry.registerIcons([
      notoEmojiU0023,
      // add more icons here
    ]);
  }
}`;

export const usage = `<noto-emoji name="emoji_u_0023"></noto-emoji>`;
