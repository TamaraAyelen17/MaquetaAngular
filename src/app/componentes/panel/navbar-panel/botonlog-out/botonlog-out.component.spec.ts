import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonlogOutComponent } from './botonlog-out.component';

describe('BotonlogOutComponent', () => {
  let component: BotonlogOutComponent;
  let fixture: ComponentFixture<BotonlogOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonlogOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonlogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
