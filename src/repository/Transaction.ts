import Transaction from '../model/Transaction';
import { TransactionRequest } from '../interface/Transaction';

class TransactionRepository {
  static async insert(transactionData: TransactionRequest): Promise<Transaction>  {
    const transaction: Transaction = new Transaction(transactionData)
    await transaction.save();

    return transaction;
  }

  static async getAllByCustomerId(customerId: number): Promise<Transaction[]> {
    const transactions: Transaction[] = await Transaction.findAll({
      where: {
        id_customer: customerId
      }
    });

    return transactions;
  }
}

export default TransactionRepository;
