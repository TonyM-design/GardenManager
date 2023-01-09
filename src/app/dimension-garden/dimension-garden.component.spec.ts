import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionGardenComponent } from './dimension-garden.component';

describe('DimensionGardenComponent', () => {
  let component: DimensionGardenComponent;
  let fixture: ComponentFixture<DimensionGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionGardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
