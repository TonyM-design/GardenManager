import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilTestComponent } from './acceuil-test.component';

describe('AcceuilTestComponent', () => {
  let component: AcceuilTestComponent;
  let fixture: ComponentFixture<AcceuilTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
