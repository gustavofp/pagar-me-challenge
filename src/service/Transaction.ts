import { TransactionInterface, TransactionModel } from "../interface/Transaction";
import TransactionRepository from '../repository/Transaction';
import Transaction from "../model/Transaction";
import TransactionMap from "../mappers/Transaction";

class TransactionService {
  static async insertTransaction(transactionData: TransactionInterface): Promise<TransactionInterface> {
    const transactionModel: TransactionModel = TransactionMap.toModel(transactionData);
    const transaction: Transaction = await TransactionRepository.insert(transactionModel);
    const transactionInterface: TransactionInterface = TransactionMap.toInterface(transaction);

    return transactionInterface;
  }

  static async getTransactionsByCustomerId(customerId: number): Promise<TransactionInterface[]> {
    const transactions: Transaction[] = await TransactionRepository.getAllByCustomerId(customerId);

    const transactionsInterface: TransactionInterface[] = transactions.map(TransactionMap.toInterface)

    return transactionsInterface;
  }
}

export default TransactionService;
