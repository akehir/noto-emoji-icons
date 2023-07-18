import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsRComponent } from './icons-r.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsRComponent', () => {
  let component: IconsRComponent;
  let fixture: ComponentFixture<IconsRComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsRComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
