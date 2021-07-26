import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGameCharacteristicsComponent } from './table-game-characteristics.component';

describe('TableGameCharacteristicsComponent', () => {
  let component: TableGameCharacteristicsComponent;
  let fixture: ComponentFixture<TableGameCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGameCharacteristicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGameCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
