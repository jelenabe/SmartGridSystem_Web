import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDialogSafetyDocumentComponent } from './device-dialog-safety-document.component';

describe('DeviceDialogSafetyDocumentComponent', () => {
  let component: DeviceDialogSafetyDocumentComponent;
  let fixture: ComponentFixture<DeviceDialogSafetyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDialogSafetyDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDialogSafetyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
