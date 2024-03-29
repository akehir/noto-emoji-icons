import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsXComponent } from './icons-x.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsXComponent', () => {
  let component: IconsXComponent;
  let fixture: ComponentFixture<IconsXComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsXComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
