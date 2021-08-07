import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreasComponent } from './text-areas.component';

describe('TextAreasComponent', () => {
  let component: TextAreasComponent;
  let fixture: ComponentFixture<TextAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
