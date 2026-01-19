import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAComponent } from './icons-a.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsAComponent', () => {
  let component: IconsAComponent;
  let fixture: ComponentFixture<IconsAComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsAComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
