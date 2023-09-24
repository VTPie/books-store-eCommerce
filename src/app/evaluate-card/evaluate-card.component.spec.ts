import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateCardComponent } from './evaluate-card.component';

describe('EvaluateCardComponent', () => {
  let component: EvaluateCardComponent;
  let fixture: ComponentFixture<EvaluateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluateCardComponent]
    });
    fixture = TestBed.createComponent(EvaluateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
