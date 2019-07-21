import { TransactionRequest, TransactionInterface } from "../interface/Transaction";
import TransactionRepository from '../repository/Transaction';
import Transaction from "../model/Transaction";
import TransactionMap from "../mappers/Transaction";

class TransactionService {
  static async insertTransaction(transactionData: TransactionRequest): Promise<TransactionInterface> {
    const transaction: Transaction = await TransactionRepository.insert(transactionData);
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
