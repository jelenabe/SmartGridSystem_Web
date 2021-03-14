/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewSafetyDocComponent } from './newSafetyDoc.component';

describe('NewSafetyDocComponent', () => {
  let component: NewSafetyDocComponent;
  let fixture: ComponentFixture<NewSafetyDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSafetyDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
