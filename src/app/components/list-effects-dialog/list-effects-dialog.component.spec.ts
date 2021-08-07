import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEffectsDialogComponent } from './list-effects-dialog.component';

describe('ListEffectsDialogComponent', () => {
  let component: ListEffectsDialogComponent;
  let fixture: ComponentFixture<ListEffectsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEffectsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEffectsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
