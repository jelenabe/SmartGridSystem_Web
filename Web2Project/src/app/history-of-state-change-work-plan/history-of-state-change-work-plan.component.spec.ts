/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryOfStateChangeWorkPlanComponent } from './history-of-state-change-work-plan.component';

describe('HistoryOfStateChangeWorkPlanComponent', () => {
  let component: HistoryOfStateChangeWorkPlanComponent;
  let fixture: ComponentFixture<HistoryOfStateChangeWorkPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfStateChangeWorkPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfStateChangeWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
