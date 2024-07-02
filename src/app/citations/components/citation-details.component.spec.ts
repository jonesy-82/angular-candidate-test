import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationDetailsComponent } from './citation-details.component';

describe('CitationDetailsComponent', () => {
  let component: CitationDetailsComponent;
  let fixture: ComponentFixture<CitationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitationDetailsComponent]
    });
    fixture = TestBed.createComponent(CitationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
