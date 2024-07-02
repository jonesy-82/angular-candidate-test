import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutrohComponent } from './rutroh.component';

describe('RutrohComponent', () => {
  let component: RutrohComponent;
  let fixture: ComponentFixture<RutrohComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutrohComponent]
    });
    fixture = TestBed.createComponent(RutrohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
