import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLoginInicioComponent } from './boton-login-inicio.component';

describe('BotonLoginInicioComponent', () => {
  let component: BotonLoginInicioComponent;
  let fixture: ComponentFixture<BotonLoginInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonLoginInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonLoginInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
