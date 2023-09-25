import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyBookCardComponent } from './tiny-book-card.component';

describe('TinyBookCardComponent', () => {
  let component: TinyBookCardComponent;
  let fixture: ComponentFixture<TinyBookCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinyBookCardComponent]
    });
    fixture = TestBed.createComponent(TinyBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
