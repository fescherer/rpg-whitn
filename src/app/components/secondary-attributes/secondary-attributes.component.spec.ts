import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAttributesComponent } from './secondary-attributes.component';

describe('SecondaryAttributesComponent', () => {
  let component: SecondaryAttributesComponent;
  let fixture: ComponentFixture<SecondaryAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
