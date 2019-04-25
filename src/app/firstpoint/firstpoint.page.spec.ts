import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpointPage } from './firstpoint.page';

describe('FirstpointPage', () => {
  let component: FirstpointPage;
  let fixture: ComponentFixture<FirstpointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstpointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
