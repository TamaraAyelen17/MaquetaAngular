import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremipanelComponent } from './sobremipanel.component';

describe('SobremipanelComponent', () => {
  let component: SobremipanelComponent;
  let fixture: ComponentFixture<SobremipanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremipanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremipanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
