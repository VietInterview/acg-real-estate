import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopEstateComponent } from './home-top-estate.component';

describe('HomeTopEstateComponent', () => {
  let component: HomeTopEstateComponent;
  let fixture: ComponentFixture<HomeTopEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
