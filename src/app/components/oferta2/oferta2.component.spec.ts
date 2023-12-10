import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oferta2Component } from './oferta2.component';

describe('Oferta2Component', () => {
  let component: Oferta2Component;
  let fixture: ComponentFixture<Oferta2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Oferta2Component]
    });
    fixture = TestBed.createComponent(Oferta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
