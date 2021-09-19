import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponDialogComponent } from './weapon-dialog.component';

describe('WeaponDialogComponent', () => {
  let component: WeaponDialogComponent;
  let fixture: ComponentFixture<WeaponDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeaponDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
