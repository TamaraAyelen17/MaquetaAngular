import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionpanelComponent } from './educacionpanel.component';

describe('EducacionpanelComponent', () => {
  let component: EducacionpanelComponent;
  let fixture: ComponentFixture<EducacionpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
