import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPainelComponent } from './expansion-painel.component';

describe('ExpansionPainelComponent', () => {
  let component: ExpansionPainelComponent;
  let fixture: ComponentFixture<ExpansionPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
