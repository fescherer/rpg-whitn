import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hex1Component } from './hex1.component';

describe('Hex1Component', () => {
  let component: Hex1Component;
  let fixture: ComponentFixture<Hex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hex1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
