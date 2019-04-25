import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreconsultPage } from './preconsult.page';

describe('PreconsultPage', () => {
  let component: PreconsultPage;
  let fixture: ComponentFixture<PreconsultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreconsultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreconsultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
