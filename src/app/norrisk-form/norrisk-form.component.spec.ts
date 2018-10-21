/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NorriskFormComponent } from './norrisk-form.component';

describe('NorriskFormComponent', () => {
  let component: NorriskFormComponent;
  let fixture: ComponentFixture<NorriskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorriskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorriskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
