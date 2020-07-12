import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageEvaluatorComponent } from './stage-evaluator.component';

describe('StageEvaluatorComponent', () => {
  let component: StageEvaluatorComponent;
  let fixture: ComponentFixture<StageEvaluatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageEvaluatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageEvaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
