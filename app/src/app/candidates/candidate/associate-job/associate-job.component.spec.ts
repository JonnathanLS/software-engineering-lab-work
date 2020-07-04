import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateJobComponent } from './associate-job.component';

describe('AssociateJobComponent', () => {
  let component: AssociateJobComponent;
  let fixture: ComponentFixture<AssociateJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateJobComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
