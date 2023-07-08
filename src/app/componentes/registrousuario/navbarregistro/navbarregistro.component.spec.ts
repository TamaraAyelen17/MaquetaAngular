import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarregistroComponent } from './navbarregistro.component';

describe('NavbarregistroComponent', () => {
  let component: NavbarregistroComponent;
  let fixture: ComponentFixture<NavbarregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarregistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
