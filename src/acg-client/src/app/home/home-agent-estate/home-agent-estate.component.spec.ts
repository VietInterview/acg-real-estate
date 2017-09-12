import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgentEstateComponent } from './home-agent-estate.component';

describe('HomeAgentEstateComponent', () => {
  let component: HomeAgentEstateComponent;
  let fixture: ComponentFixture<HomeAgentEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAgentEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAgentEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
