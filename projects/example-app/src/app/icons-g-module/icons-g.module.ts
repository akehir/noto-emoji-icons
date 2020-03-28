import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsGComponent } from './icons-g.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

const routes: Routes = [
  { path: '', component: IconsGComponent }
];

@NgModule({
  declarations: [IconsGComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NotoEmojiIconsModule,
  ]
})
export class IconsGModule { }
