import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormregistrousuarioComponent } from './formregistrousuario.component';

describe('FormregistrousuarioComponent', () => {
  let component: FormregistrousuarioComponent;
  let fixture: ComponentFixture<FormregistrousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormregistrousuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormregistrousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
