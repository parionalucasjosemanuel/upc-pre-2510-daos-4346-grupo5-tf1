import { Component, Input } from '@angular/core';
import { Subscription } from '../../model/subscription.model';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.css'],
})
export class SubscriptionCardComponent {
  @Input() subscription!: Subscription;
}
