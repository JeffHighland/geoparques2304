import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintwoPage } from './maintwo.page';

describe('MaintwoPage', () => {
  let component: MaintwoPage;
  let fixture: ComponentFixture<MaintwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
