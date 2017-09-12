import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopEstateProjectComponent } from './home-top-estate-project.component';

describe('HomeTopEstateProjectComponent', () => {
  let component: HomeTopEstateProjectComponent;
  let fixture: ComponentFixture<HomeTopEstateProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopEstateProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopEstateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
