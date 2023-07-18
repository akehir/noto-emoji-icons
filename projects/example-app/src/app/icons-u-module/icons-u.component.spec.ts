import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsUComponent } from './icons-u.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsUComponent', () => {
  let component: IconsUComponent;
  let fixture: ComponentFixture<IconsUComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsUComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
