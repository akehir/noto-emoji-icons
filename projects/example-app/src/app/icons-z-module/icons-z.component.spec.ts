import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsZComponent } from './icons-z.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsZComponent', () => {
  let component: IconsZComponent;
  let fixture: ComponentFixture<IconsZComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsZComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
