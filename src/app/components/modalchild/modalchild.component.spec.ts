import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalchildComponent } from './modalchild.component';

describe('ModalchildComponent', () => {
  let component: ModalchildComponent;
  let fixture: ComponentFixture<ModalchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalchildComponent]
    });
    fixture = TestBed.createComponent(ModalchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
