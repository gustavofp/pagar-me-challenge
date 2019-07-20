export interface PayableInterface {
  id_transaction: Number,
  status: string,
  payment_date: Date,
  fee: number,
  available_amount: number
}

export enum Status {
  'paid',
  'waiting_funds'
}
