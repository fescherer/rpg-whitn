import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexDialogComponent } from './hex-dialog.component';

describe('HexDialogComponent', () => {
  let component: HexDialogComponent;
  let fixture: ComponentFixture<HexDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
