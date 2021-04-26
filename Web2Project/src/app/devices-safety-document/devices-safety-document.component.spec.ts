import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesSafetyDocumentComponent } from './devices-safety-document.component';

describe('DevicesSafetyDocumentComponent', () => {
  let component: DevicesSafetyDocumentComponent;
  let fixture: ComponentFixture<DevicesSafetyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesSafetyDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesSafetyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
