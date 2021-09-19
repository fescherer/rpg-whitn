import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterSheetComponent } from './caracter-sheet.component';

describe('CaracterSheetComponent', () => {
  let component: CaracterSheetComponent;
  let fixture: ComponentFixture<CaracterSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaracterSheetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
