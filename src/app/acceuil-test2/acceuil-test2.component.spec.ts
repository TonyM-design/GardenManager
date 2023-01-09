import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilTest2Component } from './acceuil-test2.component';

describe('AcceuilTest2Component', () => {
  let component: AcceuilTest2Component;
  let fixture: ComponentFixture<AcceuilTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
