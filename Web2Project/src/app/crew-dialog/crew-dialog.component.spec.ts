import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDialogComponent } from './crew-dialog.component';

describe('CrewDialogComponent', () => {
  let component: CrewDialogComponent;
  let fixture: ComponentFixture<CrewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
