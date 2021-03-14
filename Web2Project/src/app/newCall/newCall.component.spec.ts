/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewCallComponent } from './newCall.component';

describe('NewCallComponent', () => {
  let component: NewCallComponent;
  let fixture: ComponentFixture<NewCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
