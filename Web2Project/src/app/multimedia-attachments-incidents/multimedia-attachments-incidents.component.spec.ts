import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaAttachmentsIncidentsComponent } from './multimedia-attachments-incidents.component';

describe('MultimediaAttachmentsIncidentsComponent', () => {
  let component: MultimediaAttachmentsIncidentsComponent;
  let fixture: ComponentFixture<MultimediaAttachmentsIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaAttachmentsIncidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaAttachmentsIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
