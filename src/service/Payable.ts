import Payable from "../model/Payable";
import { TransactionInterface, PaymentMethods } from "../interface/Transaction";
import { PaymentMethodInterface } from "../interface/PaymentMethod";
import { PayableInterface, Status, PayableModel } from "../interface/Payable";
import PayableRepository from "../repository/Payable";
import PayableMap from "../mappers/Payable";

class PayableService {
  private static getPayableData(transaction: TransactionInterface, fee: number): PayableInterface {
    let status: string = '';
    let paymentDate: Date = new Date(transaction.transactionDate);

    if(transaction.paymentMethod === PaymentMethods.DEBIT_CARD) {
      status = Status.PAID;
    } else if (transaction.paymentMethod === PaymentMethods.CREDIT_CARD) {
      status = Status.WAITING_FUNDS;
      paymentDate.setDate(paymentDate.getDate() + 30);
    }

    return {
      idTransaction: transaction.id,
      status,
      availableAmount: transaction.amount - ((100 * fee) / transaction.amount),
      paymentDate
    }
  }

  static async insertPayableForTransaction(transaction: TransactionInterface, paymentMethod: PaymentMethodInterface): Promise<PayableInterface> {
    const { fee } = paymentMethod;
    const payableData: PayableInterface = this.getPayableData(transaction, fee);

    const payableModel: PayableModel = PayableMap.toModel(payableData);
    const payable: Payable = await PayableRepository.insert(payableModel);
    const payableInterface: PayableInterface = PayableMap.toInterface(payable);

    return payableInterface;
  }

  static async getPayablesByCustomerId(customerId: number): Promise<PayableInterface[]> {
    const payables: Payable[] = await PayableRepository.getByCustomerId(customerId);

    const payablesInterface: PayableInterface[] = payables.map(PayableMap.toInterface);

    return payablesInterface;
  }
}

export default PayableService;
