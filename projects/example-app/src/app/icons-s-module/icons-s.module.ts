import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsSComponent } from './icons-s.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

const routes: Routes = [
  { path: '', component: IconsSComponent }
];

@NgModule({
  declarations: [IconsSComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NotoEmojiIconsModule,
  ]
})
export class IconsSModule { }
