import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionpanelComponent } from './seccionpanel.component';

describe('SeccionpanelComponent', () => {
  let component: SeccionpanelComponent;
  let fixture: ComponentFixture<SeccionpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
