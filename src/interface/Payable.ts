export interface PayableInterface {
  id?: number,
  idTransaction: number,
  status: string,
  paymentDate: Date,
  availableAmount: number
}

export interface PayableModel {
  id?: number,
  id_transaction: number,
  status: string,
  payment_date: Date,
  available_amount: number
}

export enum Status {
  PAID = 'paid',
  WAITING_FUNDS = 'waiting_funds'
}
