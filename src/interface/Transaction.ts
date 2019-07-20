export interface TransactionInterface {
    id?: number,
    id_customer: number,
    id_card: number,
    transaction_date: Date,
    payment_method: Enumerator<PaymentMethods>,
    amount: number
}

export interface TransactionRequest {
  id?: number,
  id_customer: number,
  id_card: number,
  transaction_date: Date,
  payment_method: string,
  amount: number
}


export enum PaymentMethods {
  'credit_card',
  'debit_card'
}
