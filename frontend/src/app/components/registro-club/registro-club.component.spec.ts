import { ComponentFixture, TestBed } from '@angular/core/testing';

import {RegistroClubComponent } from './registro-club.component';

describe( 'RegistroClubComponent', () => {
  let component: RegistroClubComponent;
  let fixture: ComponentFixture <RegistroClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent (RegistroClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
