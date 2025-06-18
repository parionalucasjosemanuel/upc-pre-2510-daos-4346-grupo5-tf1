import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionCardComponent } from './subscription-card.component';

describe('SubscriptionCardComponent', () => {
  let component: SubscriptionCardComponent;
  let fixture: ComponentFixture<SubscriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionCardComponent);
    component = fixture.componentInstance;
    component.subscription = {
      id: 1,
      userId: 101,
      type: 'Premium',
      startDate: new Date(),
      endDate: new Date(),
      status: 'active'
    };
    fixture.detectChanges();
  });

  it('should create the subscription card', () => {
    expect(component).toBeTruthy();
  });
});
