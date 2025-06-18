export interface Subscription {
  id: number;
  userId: number;
  type: 'Freemium' | 'Premium';
  startDate: Date;
  endDate: Date;
  status: 'active' | 'expired' | 'cancelled';
}
