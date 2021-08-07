import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StabilityComponent } from './stability.component';

describe('StabilityComponent', () => {
  let component: StabilityComponent;
  let fixture: ComponentFixture<StabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
