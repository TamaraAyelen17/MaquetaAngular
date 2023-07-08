import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciapanelComponent } from './experienciapanel.component';

describe('ExperienciapanelComponent', () => {
  let component: ExperienciapanelComponent;
  let fixture: ComponentFixture<ExperienciapanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciapanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciapanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
