import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsMComponent } from './icons-m.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsMComponent', () => {
  let component: IconsMComponent;
  let fixture: ComponentFixture<IconsMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsMComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
