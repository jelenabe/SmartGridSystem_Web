/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultimediaAttachmentsWPComponent } from './multimedia-attachmentsWP.component';

describe('MultimediaAttachmentsWPComponent', () => {
  let component: MultimediaAttachmentsWPComponent;
  let fixture: ComponentFixture<MultimediaAttachmentsWPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaAttachmentsWPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaAttachmentsWPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
