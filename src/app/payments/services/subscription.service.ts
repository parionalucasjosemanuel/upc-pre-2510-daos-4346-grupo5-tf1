import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subscription } from '../model/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private subscriptions: Subscription[] = [
    {
      id: 1,
      userId: 101,
      type: 'Premium',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-12-31'),
      status: 'active',
    },
    {
      id: 2,
      userId: 102,
      type: 'Freemium',
      startDate: new Date('2025-03-01'),
      endDate: new Date('2025-12-31'),
      status: 'active',
    },
  ];

  getUserSubscription(): Observable<Subscription> {
    // Simulación: devuelve el primer registro
    return of(this.subscriptions[0]);
  }

  getAll(): Subscription[] {
    return [...this.subscriptions];
  }

  cancel(id: number): void {
    const sub = this.subscriptions.find((s) => s.id === id);
    if (sub) {
      sub.status = 'cancelled';
    }
  }
}

