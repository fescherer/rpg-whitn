import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponTableComponent } from './weapon-table.component';

describe('WeaponTableComponent', () => {
  let component: WeaponTableComponent;
  let fixture: ComponentFixture<WeaponTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeaponTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
