import PaymentMethod from "../model/PaymentMethod";
import { PaymentMethodInterface } from "../interface/PaymentMethod";

class PaymentMethodMap {
  static toInterface(paymentMethod: PaymentMethod): PaymentMethodInterface {
    return {
      name: paymentMethod.name,
      description: paymentMethod.description,
      fee: paymentMethod.fee
    }
  }
}

export default PaymentMethodMap;
