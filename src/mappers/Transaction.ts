import Transaction from "../model/Transaction";
import { TransactionInterface, PaymentMethods } from "../interface/Transaction";

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
}

export default TransactionMap;
