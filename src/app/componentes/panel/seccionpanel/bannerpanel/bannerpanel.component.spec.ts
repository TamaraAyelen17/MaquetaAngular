import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerpanelComponent } from './bannerpanel.component';

describe('BannerpanelComponent', () => {
  let component: BannerpanelComponent;
  let fixture: ComponentFixture<BannerpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
