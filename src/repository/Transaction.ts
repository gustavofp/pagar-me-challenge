import Transaction from '../model/Transaction';
import { TransactionRequest } from '../interface/Transaction';

class TransactionRepository {
  static async insert(transactionData: TransactionRequest): Promise<Transaction>  {
    const transaction: Transaction = new Transaction(transactionData)
    await transaction.save();

    return transaction;
  }
}

export default TransactionRepository;
