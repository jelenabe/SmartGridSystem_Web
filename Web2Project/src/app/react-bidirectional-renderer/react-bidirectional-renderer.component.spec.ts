/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactBidirectionalRendererComponent } from './react-bidirectional-renderer.component';

describe('ReactBidirectionalRendererComponent', () => {
  let component: ReactBidirectionalRendererComponent;
  let fixture: ComponentFixture<ReactBidirectionalRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactBidirectionalRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactBidirectionalRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
