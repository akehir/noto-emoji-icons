import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsWComponent } from './icons-w.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsDComponent', () => {
  let component: IconsWComponent;
  let fixture: ComponentFixture<IconsWComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsWComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
