import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomerFeedbackComponent } from './home-customer-feedback.component';

describe('HomeCustomerFeedbackComponent', () => {
  let component: HomeCustomerFeedbackComponent;
  let fixture: ComponentFixture<HomeCustomerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCustomerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCustomerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
