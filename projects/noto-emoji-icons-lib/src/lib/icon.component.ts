import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation, DOCUMENT, inject } from '@angular/core';
import { NotoEmojiIconsRegistry } from './icons.registry';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'noto-emoji',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class NotoEmojiIconComponent {
  private element = inject(ElementRef);
  private iconsRegistry = inject(NotoEmojiIconsRegistry);
  private document = inject<Document>(DOCUMENT, { optional: true });

  private svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconsRegistry.getIcon(iconName);

    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    if (div instanceof HTMLElement) {
      div.innerHTML = svgContent;
      return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
  }
}
