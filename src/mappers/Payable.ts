import Payable from "../model/Payable";
import { PayableInterface, PayableModel } from "../interface/Payable";


class PayableMap {
  static toInterface(payable: Payable | PayableModel):PayableInterface {
    return {
      idTransaction: payable.id_transaction,
      availableAmount: payable.available_amount,
      paymentDate: new Date(payable.payment_date),
      status: payable.status
    }
  }
  static toModel(payable: PayableInterface): PayableModel {
    return {
      id_transaction: payable.idTransaction,
      available_amount: payable.availableAmount,
      payment_date: payable.paymentDate,
      status: payable.status
    }
  }
}

export default PayableMap;
