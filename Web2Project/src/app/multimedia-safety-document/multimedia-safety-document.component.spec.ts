import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaSafetyDocumentComponent } from './multimedia-safety-document.component';

describe('MultimediaSafetyDocumentComponent', () => {
  let component: MultimediaSafetyDocumentComponent;
  let fixture: ComponentFixture<MultimediaSafetyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaSafetyDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaSafetyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
