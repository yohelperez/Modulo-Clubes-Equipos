import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubequipoConsultaComponent } from './clubequipo-consulta.component';

describe('ClubequipoConsultaComponent', () => {
  let component: ClubequipoConsultaComponent;
  let fixture: ComponentFixture<ClubequipoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubequipoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubequipoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
