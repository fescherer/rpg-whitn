import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyEffectsComponent } from './currently-effects.component';

describe('CurrentlyEffectsComponent', () => {
  let component: CurrentlyEffectsComponent;
  let fixture: ComponentFixture<CurrentlyEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
