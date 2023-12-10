import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarProductComponent } from './webinar-product.component';

describe('WebinarProductComponent', () => {
  let component: WebinarProductComponent;
  let fixture: ComponentFixture<WebinarProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarProductComponent]
    });
    fixture = TestBed.createComponent(WebinarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
