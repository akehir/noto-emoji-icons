import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsHComponent } from './icons-h.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsHComponent', () => {
  let component: IconsHComponent;
  let fixture: ComponentFixture<IconsHComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsHComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
