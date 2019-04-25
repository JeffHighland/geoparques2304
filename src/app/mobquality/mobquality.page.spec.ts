import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobqualityPage } from './mobquality.page';

describe('MobqualityPage', () => {
  let component: MobqualityPage;
  let fixture: ComponentFixture<MobqualityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobqualityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobqualityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
