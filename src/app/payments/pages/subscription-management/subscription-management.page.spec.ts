import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionManagementPage } from './subscription-management.page';
import { SubscriptionService } from '../../services/subscription.service';

describe('SubscriptionManagementPage', () => {
  let component: SubscriptionManagementPage;
  let fixture: ComponentFixture<SubscriptionManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionManagementPage],
      providers: [SubscriptionService]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the subscription management page', () => {
    expect(component).toBeTruthy();
  });
});
