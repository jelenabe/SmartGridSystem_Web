/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewCrewComponent } from './newCrew.component';

describe('NewCrewComponent', () => {
  let component: NewCrewComponent;
  let fixture: ComponentFixture<NewCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
