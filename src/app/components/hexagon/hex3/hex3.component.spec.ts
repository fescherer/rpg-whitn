import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hex3Component } from './hex3.component';

describe('Hex3Component', () => {
  let component: Hex3Component;
  let fixture: ComponentFixture<Hex3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hex3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
