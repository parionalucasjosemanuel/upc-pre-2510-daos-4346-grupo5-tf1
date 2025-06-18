import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from '../../../payments/services/subscription.service';
import { Subscription } from '../../../payments/model/subscription.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isPremium: boolean = false;

  constructor(private router: Router, private subscriptionService: SubscriptionService) {
    this.subscriptionService.getUserSubscription().subscribe((sub: Subscription) => {
      this.isPremium = sub?.type === 'Premium';
    });
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
