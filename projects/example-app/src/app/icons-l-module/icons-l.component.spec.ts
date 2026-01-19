import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLComponent } from './icons-l.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsLComponent', () => {
  let component: IconsLComponent;
  let fixture: ComponentFixture<IconsLComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsLComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
