import PaymentMethod from "../model/PaymentMethod";
import { PaymentMethodInterface, PaymentMethodModel } from "../interface/PaymentMethod";

class PaymentMethodMap {
  static toInterface(paymentMethod: PaymentMethod | PaymentMethodModel ): PaymentMethodInterface {
    return {
      name: paymentMethod.name,
      description: paymentMethod.description,
      fee: paymentMethod.fee
    }
  }
}

export default PaymentMethodMap;
