import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsNComponent } from './icons-n.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsNComponent', () => {
  let component: IconsNComponent;
  let fixture: ComponentFixture<IconsNComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsNComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
