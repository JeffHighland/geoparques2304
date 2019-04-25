import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiliarPage } from './mobiliar.page';

describe('MobiliarPage', () => {
  let component: MobiliarPage;
  let fixture: ComponentFixture<MobiliarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiliarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
