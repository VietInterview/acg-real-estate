import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceIntroductionComponent } from './home-service-introduction.component';

describe('HomeServiceIntroductionComponent', () => {
  let component: HomeServiceIntroductionComponent;
  let fixture: ComponentFixture<HomeServiceIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiceIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiceIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
