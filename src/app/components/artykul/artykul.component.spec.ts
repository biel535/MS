import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtykulComponent } from './artykul.component';

describe('ArtykulComponent', () => {
  let component: ArtykulComponent;
  let fixture: ComponentFixture<ArtykulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtykulComponent]
    });
    fixture = TestBed.createComponent(ArtykulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
