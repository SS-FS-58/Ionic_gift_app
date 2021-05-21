import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycardPage } from './mycard.page';

describe('MycardPage', () => {
  let component: MycardPage;
  let fixture: ComponentFixture<MycardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
