import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsYComponent } from './icons-y.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsYComponent', () => {
  let component: IconsYComponent;
  let fixture: ComponentFixture<IconsYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsYComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
