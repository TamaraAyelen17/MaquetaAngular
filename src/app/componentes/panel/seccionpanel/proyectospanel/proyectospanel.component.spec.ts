import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectospanelComponent } from './proyectospanel.component';

describe('ProyectospanelComponent', () => {
  let component: ProyectospanelComponent;
  let fixture: ComponentFixture<ProyectospanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectospanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectospanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
