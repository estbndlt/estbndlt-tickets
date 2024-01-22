export enum OrderStatus {
  // order is created but ticket is not yet reserved
  Created = 'created',
  // ticket order is trying to reserve has been reserved but order is cancelled
  Cancelled = 'cancelled',
  // order has successfully reserved ticket
  AwaitingPayment = 'awaiting:payment',
  // order has reserved ticket and user has made payment
  Complete = 'complete',
}
