import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIniciosesionComponent } from './navbar-iniciosesion.component';

describe('NavbarIniciosesionComponent', () => {
  let component: NavbarIniciosesionComponent;
  let fixture: ComponentFixture<NavbarIniciosesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarIniciosesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarIniciosesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
