import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWeaponsListComponent } from './dialog-weapons-list.component';

describe('DialogWeaponsListComponent', () => {
  let component: DialogWeaponsListComponent;
  let fixture: ComponentFixture<DialogWeaponsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogWeaponsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWeaponsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
