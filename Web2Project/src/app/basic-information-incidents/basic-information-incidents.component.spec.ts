import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInformationIncidentsComponent } from './basic-information-incidents.component';

describe('BasicInformationIncidentsComponent', () => {
  let component: BasicInformationIncidentsComponent;
  let fixture: ComponentFixture<BasicInformationIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInformationIncidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
