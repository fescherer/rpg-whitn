import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCombatRulesComponent } from './dialog-combat-rules.component';

describe('DialogCombatRulesComponent', () => {
  let component: DialogCombatRulesComponent;
  let fixture: ComponentFixture<DialogCombatRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogCombatRulesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCombatRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
