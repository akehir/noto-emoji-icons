import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsIComponent } from './icons-i.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsIComponent', () => {
  let component: IconsIComponent;
  let fixture: ComponentFixture<IconsIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsIComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
