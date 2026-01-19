import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTComponent } from './icons-t.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsTComponent', () => {
  let component: IconsTComponent;
  let fixture: ComponentFixture<IconsTComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsTComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
