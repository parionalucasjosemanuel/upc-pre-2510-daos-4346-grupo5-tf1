import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../model/subscription.model';

@Component({
  selector: 'app-subscription-management',
  templateUrl: './subscription-management.page.html',
  styleUrls: ['./subscription-management.page.css'],
})
export class SubscriptionManagementPage implements OnInit {
  subscriptions: Subscription[] = [];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.subscriptions = this.subscriptionService.getAll();
  }

  cancel(id: number) {
    this.subscriptionService.cancel(id);
    this.subscriptions = this.subscriptionService.getAll();
  }
}
