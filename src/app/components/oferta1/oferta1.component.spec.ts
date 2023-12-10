import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oferta1Component } from './oferta1.component';

describe('Oferta1Component', () => {
  let component: Oferta1Component;
  let fixture: ComponentFixture<Oferta1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Oferta1Component]
    });
    fixture = TestBed.createComponent(Oferta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
