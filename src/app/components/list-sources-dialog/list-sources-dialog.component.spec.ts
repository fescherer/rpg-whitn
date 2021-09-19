import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSourcesDialogComponent } from './list-sources-dialog.component';

describe('ListSourcesDialogComponent', () => {
  let component: ListSourcesDialogComponent;
  let fixture: ComponentFixture<ListSourcesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSourcesDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSourcesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
