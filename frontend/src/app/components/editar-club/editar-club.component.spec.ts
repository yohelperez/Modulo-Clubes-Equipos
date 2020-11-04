import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClubComponent } from './editar-club.component';

describe('EditarClubComponent', () => {
  let component: EditarClubComponent;
  let fixture: ComponentFixture<EditarClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
