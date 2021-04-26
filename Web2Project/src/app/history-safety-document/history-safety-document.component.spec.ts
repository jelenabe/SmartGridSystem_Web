import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySafetyDocumentComponent } from './history-safety-document.component';

describe('HistorySafetyDocumentComponent', () => {
  let component: HistorySafetyDocumentComponent;
  let fixture: ComponentFixture<HistorySafetyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySafetyDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySafetyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
