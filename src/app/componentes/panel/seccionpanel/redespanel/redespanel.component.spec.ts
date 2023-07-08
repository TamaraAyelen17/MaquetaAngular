import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedespanelComponent } from './redespanel.component';

describe('RedespanelComponent', () => {
  let component: RedespanelComponent;
  let fixture: ComponentFixture<RedespanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedespanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedespanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
