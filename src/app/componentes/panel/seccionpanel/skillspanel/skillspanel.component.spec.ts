import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillspanelComponent } from './skillspanel.component';

describe('SkillspanelComponent', () => {
  let component: SkillspanelComponent;
  let fixture: ComponentFixture<SkillspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillspanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
