import { Component, ViewEncapsulation } from '@angular/core';
import { NotoEmojiIconsRegistry, } from '@triangular/noto-emoji-icons';

import {
  notoEmojiU1F9C3,
  notoEmojiU1F9C4,
  notoEmojiU1F9C5,
  notoEmojiU1F9C6,
  notoEmojiU1F9C7,
  notoEmojiU1F9C8,
  notoEmojiU1F9C9,
  notoEmojiU1F9Ca,
  notoEmojiU1F9Cd,
  notoEmojiU1F9Cd1F3Fb,
  notoEmojiU1F9Cd1F3Fb200D2640,
  notoEmojiU1F9Cd1F3Fb200D2642,
  notoEmojiU1F9Cd1F3Fc,
  notoEmojiU1F9Cd1F3Fc200D2640,
  notoEmojiU1F9Cd1F3Fc200D2642,
  notoEmojiU1F9Cd1F3Fd,
  notoEmojiU1F9Cd1F3Fd200D2640,
  notoEmojiU1F9Cd1F3Fd200D2642,
  notoEmojiU1F9Cd1F3Fe,
  notoEmojiU1F9Cd1F3Fe200D2640,
  notoEmojiU1F9Cd1F3Fe200D2642,
  notoEmojiU1F9Cd1F3Ff,
  notoEmojiU1F9Cd1F3Ff200D2640,
  notoEmojiU1F9Cd1F3Ff200D2642,
  notoEmojiU1F9Cd200D2640,
  notoEmojiU1F9Cd200D2642,
  notoEmojiU1F9Ce,
  notoEmojiU1F9Ce1F3Fb,
  notoEmojiU1F9Ce1F3Fb200D2640,
  notoEmojiU1F9Ce1F3Fb200D2642,
  notoEmojiU1F9Ce1F3Fc,
  notoEmojiU1F9Ce1F3Fc200D2640,
  notoEmojiU1F9Ce1F3Fc200D2642,
  notoEmojiU1F9Ce1F3Fd,
  notoEmojiU1F9Ce1F3Fd200D2640,
  notoEmojiU1F9Ce1F3Fd200D2642,
  notoEmojiU1F9Ce1F3Fe,
  notoEmojiU1F9Ce1F3Fe200D2640,
  notoEmojiU1F9Ce1F3Fe200D2642,
  notoEmojiU1F9Ce1F3Ff,
  notoEmojiU1F9Ce1F3Ff200D2640,
  notoEmojiU1F9Ce1F3Ff200D2642,
  notoEmojiU1F9Ce200D2640,
  notoEmojiU1F9Ce200D2642,
  notoEmojiU1F9Cf,
  notoEmojiU1F9Cf1F3Fb,
  notoEmojiU1F9Cf1F3Fb200D2640,
  notoEmojiU1F9Cf1F3Fb200D2642,
  notoEmojiU1F9Cf1F3Fc,
  notoEmojiU1F9Cf1F3Fc200D2640,
  notoEmojiU1F9Cf1F3Fc200D2642,
  notoEmojiU1F9Cf1F3Fd,
  notoEmojiU1F9Cf1F3Fd200D2640,
  notoEmojiU1F9Cf1F3Fd200D2642,
  notoEmojiU1F9Cf1F3Fe,
  notoEmojiU1F9Cf1F3Fe200D2640,
  notoEmojiU1F9Cf1F3Fe200D2642,
  notoEmojiU1F9Cf1F3Ff,
  notoEmojiU1F9Cf1F3Ff200D2640,
  notoEmojiU1F9Cf1F3Ff200D2642,
  notoEmojiU1F9Cf200D2640,
  notoEmojiU1F9Cf200D2642,
  notoEmojiU1F9D0,
  notoEmojiU1F9D1,
  notoEmojiU1F9D11F3Fb,
  notoEmojiU1F9D11F3Fb200D1F33E,
  notoEmojiU1F9D11F3Fb200D1F373,
  notoEmojiU1F9D11F3Fb200D1F393,
  notoEmojiU1F9D11F3Fb200D1F3A4,
  notoEmojiU1F9D11F3Fb200D1F3A8,
  notoEmojiU1F9D11F3Fb200D1F3Eb,
  notoEmojiU1F9D11F3Fb200D1F3Ed,
  notoEmojiU1F9D11F3Fb200D1F4Bb,
  notoEmojiU1F9D11F3Fb200D1F4Bc,
  notoEmojiU1F9D11F3Fb200D1F527,
  notoEmojiU1F9D11F3Fb200D1F52C,
  notoEmojiU1F9D11F3Fb200D1F680,
  notoEmojiU1F9D11F3Fb200D1F692,
  notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Fb,
  notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Fc,
  notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Fd,
  notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Fe,
  notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Ff,
  notoEmojiU1F9D11F3Fb200D1F9Af,
  notoEmojiU1F9D11F3Fb200D1F9B0,
  notoEmojiU1F9D11F3Fb200D1F9B1,
  notoEmojiU1F9D11F3Fb200D1F9B2,
  notoEmojiU1F9D11F3Fb200D1F9B3,
  notoEmojiU1F9D11F3Fb200D1F9Bc,
  notoEmojiU1F9D11F3Fb200D1F9Bd,
  notoEmojiU1F9D11F3Fb200D2695,
  notoEmojiU1F9D11F3Fb200D2696,
  notoEmojiU1F9D11F3Fb200D2708,
  notoEmojiU1F9D11F3Fc,
  notoEmojiU1F9D11F3Fc200D1F33E,
  notoEmojiU1F9D11F3Fc200D1F373,
  notoEmojiU1F9D11F3Fc200D1F393,
  notoEmojiU1F9D11F3Fc200D1F3A4,
  notoEmojiU1F9D11F3Fc200D1F3A8,
  notoEmojiU1F9D11F3Fc200D1F3Eb,
  notoEmojiU1F9D11F3Fc200D1F3Ed,
  notoEmojiU1F9D11F3Fc200D1F4Bb,
  notoEmojiU1F9D11F3Fc200D1F4Bc,
  notoEmojiU1F9D11F3Fc200D1F527,
  notoEmojiU1F9D11F3Fc200D1F52C,
  notoEmojiU1F9D11F3Fc200D1F680,
  notoEmojiU1F9D11F3Fc200D1F692,
  notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Fb,
  notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Fc,
  notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Fd,
  notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Fe,
  notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Ff,
  notoEmojiU1F9D11F3Fc200D1F9Af,
  notoEmojiU1F9D11F3Fc200D1F9B0,
  notoEmojiU1F9D11F3Fc200D1F9B1,
  notoEmojiU1F9D11F3Fc200D1F9B2,
} from '@triangular/noto-emoji-icons/icons';

@Component({
  selector: 'app-icons-u',
  templateUrl: './icons-u.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsUComponent {
  icons = [
    notoEmojiU1F9C3,
    notoEmojiU1F9C4,
    notoEmojiU1F9C5,
    notoEmojiU1F9C6,
    notoEmojiU1F9C7,
    notoEmojiU1F9C8,
    notoEmojiU1F9C9,
    notoEmojiU1F9Ca,
    notoEmojiU1F9Cd,
    notoEmojiU1F9Cd1F3Fb,
    notoEmojiU1F9Cd1F3Fb200D2640,
    notoEmojiU1F9Cd1F3Fb200D2642,
    notoEmojiU1F9Cd1F3Fc,
    notoEmojiU1F9Cd1F3Fc200D2640,
    notoEmojiU1F9Cd1F3Fc200D2642,
    notoEmojiU1F9Cd1F3Fd,
    notoEmojiU1F9Cd1F3Fd200D2640,
    notoEmojiU1F9Cd1F3Fd200D2642,
    notoEmojiU1F9Cd1F3Fe,
    notoEmojiU1F9Cd1F3Fe200D2640,
    notoEmojiU1F9Cd1F3Fe200D2642,
    notoEmojiU1F9Cd1F3Ff,
    notoEmojiU1F9Cd1F3Ff200D2640,
    notoEmojiU1F9Cd1F3Ff200D2642,
    notoEmojiU1F9Cd200D2640,
    notoEmojiU1F9Cd200D2642,
    notoEmojiU1F9Ce,
    notoEmojiU1F9Ce1F3Fb,
    notoEmojiU1F9Ce1F3Fb200D2640,
    notoEmojiU1F9Ce1F3Fb200D2642,
    notoEmojiU1F9Ce1F3Fc,
    notoEmojiU1F9Ce1F3Fc200D2640,
    notoEmojiU1F9Ce1F3Fc200D2642,
    notoEmojiU1F9Ce1F3Fd,
    notoEmojiU1F9Ce1F3Fd200D2640,
    notoEmojiU1F9Ce1F3Fd200D2642,
    notoEmojiU1F9Ce1F3Fe,
    notoEmojiU1F9Ce1F3Fe200D2640,
    notoEmojiU1F9Ce1F3Fe200D2642,
    notoEmojiU1F9Ce1F3Ff,
    notoEmojiU1F9Ce1F3Ff200D2640,
    notoEmojiU1F9Ce1F3Ff200D2642,
    notoEmojiU1F9Ce200D2640,
    notoEmojiU1F9Ce200D2642,
    notoEmojiU1F9Cf,
    notoEmojiU1F9Cf1F3Fb,
    notoEmojiU1F9Cf1F3Fb200D2640,
    notoEmojiU1F9Cf1F3Fb200D2642,
    notoEmojiU1F9Cf1F3Fc,
    notoEmojiU1F9Cf1F3Fc200D2640,
    notoEmojiU1F9Cf1F3Fc200D2642,
    notoEmojiU1F9Cf1F3Fd,
    notoEmojiU1F9Cf1F3Fd200D2640,
    notoEmojiU1F9Cf1F3Fd200D2642,
    notoEmojiU1F9Cf1F3Fe,
    notoEmojiU1F9Cf1F3Fe200D2640,
    notoEmojiU1F9Cf1F3Fe200D2642,
    notoEmojiU1F9Cf1F3Ff,
    notoEmojiU1F9Cf1F3Ff200D2640,
    notoEmojiU1F9Cf1F3Ff200D2642,
    notoEmojiU1F9Cf200D2640,
    notoEmojiU1F9Cf200D2642,
    notoEmojiU1F9D0,
    notoEmojiU1F9D1,
    notoEmojiU1F9D11F3Fb,
    notoEmojiU1F9D11F3Fb200D1F33E,
    notoEmojiU1F9D11F3Fb200D1F373,
    notoEmojiU1F9D11F3Fb200D1F393,
    notoEmojiU1F9D11F3Fb200D1F3A4,
    notoEmojiU1F9D11F3Fb200D1F3A8,
    notoEmojiU1F9D11F3Fb200D1F3Eb,
    notoEmojiU1F9D11F3Fb200D1F3Ed,
    notoEmojiU1F9D11F3Fb200D1F4Bb,
    notoEmojiU1F9D11F3Fb200D1F4Bc,
    notoEmojiU1F9D11F3Fb200D1F527,
    notoEmojiU1F9D11F3Fb200D1F52C,
    notoEmojiU1F9D11F3Fb200D1F680,
    notoEmojiU1F9D11F3Fb200D1F692,
    notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Fb,
    notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Fc,
    notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Fd,
    notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Fe,
    notoEmojiU1F9D11F3Fb200D1F91D200D1F9D11F3Ff,
    notoEmojiU1F9D11F3Fb200D1F9Af,
    notoEmojiU1F9D11F3Fb200D1F9B0,
    notoEmojiU1F9D11F3Fb200D1F9B1,
    notoEmojiU1F9D11F3Fb200D1F9B2,
    notoEmojiU1F9D11F3Fb200D1F9B3,
    notoEmojiU1F9D11F3Fb200D1F9Bc,
    notoEmojiU1F9D11F3Fb200D1F9Bd,
    notoEmojiU1F9D11F3Fb200D2695,
    notoEmojiU1F9D11F3Fb200D2696,
    notoEmojiU1F9D11F3Fb200D2708,
    notoEmojiU1F9D11F3Fc,
    notoEmojiU1F9D11F3Fc200D1F33E,
    notoEmojiU1F9D11F3Fc200D1F373,
    notoEmojiU1F9D11F3Fc200D1F393,
    notoEmojiU1F9D11F3Fc200D1F3A4,
    notoEmojiU1F9D11F3Fc200D1F3A8,
    notoEmojiU1F9D11F3Fc200D1F3Eb,
    notoEmojiU1F9D11F3Fc200D1F3Ed,
    notoEmojiU1F9D11F3Fc200D1F4Bb,
    notoEmojiU1F9D11F3Fc200D1F4Bc,
    notoEmojiU1F9D11F3Fc200D1F527,
    notoEmojiU1F9D11F3Fc200D1F52C,
    notoEmojiU1F9D11F3Fc200D1F680,
    notoEmojiU1F9D11F3Fc200D1F692,
    notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Fb,
    notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Fc,
    notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Fd,
    notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Fe,
    notoEmojiU1F9D11F3Fc200D1F91D200D1F9D11F3Ff,
    notoEmojiU1F9D11F3Fc200D1F9Af,
    notoEmojiU1F9D11F3Fc200D1F9B0,
    notoEmojiU1F9D11F3Fc200D1F9B1,
    notoEmojiU1F9D11F3Fc200D1F9B2,
  ];

  constructor(private registry: NotoEmojiIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
