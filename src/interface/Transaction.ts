export interface TransactionInterface {
    id?: number,
    idCustomer: number,
    idCard?: number,
    transactionDate: Date,
    paymentMethod: string,
    description: string,
    amount: number
}

export interface CreateTransactionRequest {
  id_customer: number,
  payment_method: string,
  description: string,
  cvv: number,
  amount: number,
  card_number: number,
  owner_name: string,
  valid_thru: Date,
}

export interface TransactionModel {
  id?: number,
  id_customer: number,
  id_card?: number,
  transaction_date: Date,
  payment_method: string,
  description: string,
  amount: number
}


export enum PaymentMethods {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card'
}
