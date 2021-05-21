import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCardPage } from './bank-card.page';

describe('BankCardPage', () => {
  let component: BankCardPage;
  let fixture: ComponentFixture<BankCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
