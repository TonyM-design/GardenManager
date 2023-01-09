import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlantsComponent } from './select-plants.component';

describe('SelectPlantsComponent', () => {
  let component: SelectPlantsComponent;
  let fixture: ComponentFixture<SelectPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
