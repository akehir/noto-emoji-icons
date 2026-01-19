import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsOComponent } from './icons-o.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsOComponent', () => {
  let component: IconsOComponent;
  let fixture: ComponentFixture<IconsOComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsOComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
