import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotoEmojiIconComponent } from './icon.component';

describe('NotoEmojiIconComponent', () => {
  let component: NotoEmojiIconComponent;
  let fixture: ComponentFixture<NotoEmojiIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotoEmojiIconComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotoEmojiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
