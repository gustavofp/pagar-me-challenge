import Transaction from "../model/Transaction";
import { TransactionInterface, TransactionModel } from "../interface/Transaction";

class TransactionMap {
  static toInterface(transaction: Transaction): TransactionInterface {
    return {
      id: transaction.id,
      idCustomer: transaction.id_customer,
      idCard: transaction.id_card,
      transactionDate: transaction.transaction_date,
      paymentMethod: transaction.payment_method,
      description: transaction.description,
      amount: transaction.amount
    }
  }
  static toModel(transaction: TransactionInterface): TransactionModel{
    return {
      id: transaction.id,
      id_customer: transaction.idCustomer,
      id_card: transaction.idCard,
      transaction_date: transaction.transactionDate,
      payment_method: transaction.paymentMethod,
      description: transaction.description,
      amount: transaction.amount
    }
  }
}

export default TransactionMap;
