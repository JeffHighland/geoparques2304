import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimeterPage } from './perimeter.page';

describe('PerimeterPage', () => {
  let component: PerimeterPage;
  let fixture: ComponentFixture<PerimeterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerimeterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerimeterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
