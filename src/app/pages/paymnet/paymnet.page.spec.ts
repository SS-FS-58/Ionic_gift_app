import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymnetPage } from './paymnet.page';

describe('PaymnetPage', () => {
  let component: PaymnetPage;
  let fixture: ComponentFixture<PaymnetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymnetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymnetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
