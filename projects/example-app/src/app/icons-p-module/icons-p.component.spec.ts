import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPComponent } from './icons-p.component';
import { NotoEmojiIconsModule } from '@triangular/noto-emoji-icons';

describe('IconsPComponent', () => {
  let component: IconsPComponent;
  let fixture: ComponentFixture<IconsPComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsPComponent ],
      imports: [
        NotoEmojiIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
