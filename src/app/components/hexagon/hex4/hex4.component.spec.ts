import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hex4Component } from './hex4.component';

describe('Hex4Component', () => {
  let component: Hex4Component;
  let fixture: ComponentFixture<Hex4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hex4Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
