import Transaction from '../model/Transaction';
import { TransactionModel } from '../interface/Transaction';

class TransactionRepository {
  static async insert(transactionData: TransactionModel): Promise<Transaction>  {
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
