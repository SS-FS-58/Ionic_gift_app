import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedCardPage } from './received-card.page';

describe('ReceivedCardPage', () => {
  let component: ReceivedCardPage;
  let fixture: ComponentFixture<ReceivedCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
