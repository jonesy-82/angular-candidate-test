import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsListComponent } from './citations-list.component';

describe('CitationsListComponent', () => {
  let component: CitationsListComponent;
  let fixture: ComponentFixture<CitationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitationsListComponent]
    });
    fixture = TestBed.createComponent(CitationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
