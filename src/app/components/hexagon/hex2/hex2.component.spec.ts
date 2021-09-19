import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hex2Component } from './hex2.component';

describe('Hex2Component', () => {
  let component: Hex2Component;
  let fixture: ComponentFixture<Hex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hex2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
