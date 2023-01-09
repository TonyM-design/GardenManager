import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelectPlantsComponent } from './item-select-plants.component';

describe('ItemSelectPlantsComponent', () => {
  let component: ItemSelectPlantsComponent;
  let fixture: ComponentFixture<ItemSelectPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSelectPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSelectPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
