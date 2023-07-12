import { ModuleWithProviders, NgModule } from '@angular/core';
import { NotoEmojiIconComponent } from './icon.component';
import { NotoEmojiIconsRegistry } from './icons.registry';

@NgModule({
  declarations: [],
  imports: [NotoEmojiIconComponent],
  exports: [NotoEmojiIconComponent]
})
export class NotoEmojiIconsModule {
  static forRoot(): ModuleWithProviders<NotoEmojiIconsModule> {
    return {
      ngModule: NotoEmojiIconsModule,
      providers: [
        NotoEmojiIconsRegistry,
      ],
    };
  }
}
