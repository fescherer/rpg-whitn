import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeperHelpButtonsComponent } from './keeper-help-buttons.component';

describe('KeeperHelpButtonsComponent', () => {
  let component: KeeperHelpButtonsComponent;
  let fixture: ComponentFixture<KeeperHelpButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeeperHelpButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeperHelpButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
