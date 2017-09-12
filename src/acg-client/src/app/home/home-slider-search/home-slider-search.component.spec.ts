import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderSearchComponent } from './home-slider-search.component';

describe('HomeSliderSearchComponent', () => {
  let component: HomeSliderSearchComponent;
  let fixture: ComponentFixture<HomeSliderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSliderSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSliderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
