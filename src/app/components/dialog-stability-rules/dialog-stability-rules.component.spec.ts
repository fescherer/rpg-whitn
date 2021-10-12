import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStabilityRulesComponent } from './dialog-stability-rules.component';

describe('DialogStabilityRulesComponent', () => {
  let component: DialogStabilityRulesComponent;
  let fixture: ComponentFixture<DialogStabilityRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogStabilityRulesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStabilityRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
