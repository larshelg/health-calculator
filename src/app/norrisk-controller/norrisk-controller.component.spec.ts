/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NorriskControllerComponent } from './norrisk-controller.component';

describe('NorriskControllerComponent', () => {
  let component: NorriskControllerComponent;
  let fixture: ComponentFixture<NorriskControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorriskControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorriskControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
