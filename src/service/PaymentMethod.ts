import { PaymentMethodInterface } from "../interface/PaymentMethod";
import PaymentMethod from "../model/PaymentMethod";
import PaymentMethodRepository from "../repository/PaymentMethod";
import PaymentMethodMap from "../mappers/PaymentMethod";

class PaymentMethodService {
  static async getPaymentMethodByName(name: string): Promise<PaymentMethodInterface> {
    const paymentMethod: PaymentMethod | null = await PaymentMethodRepository.getByName(name);
    if (!paymentMethod) {
      throw new Error();
    }

    const paymentMethodInterface: PaymentMethodInterface = PaymentMethodMap.toInterface(paymentMethod);
    return paymentMethodInterface;
  }
}

export default PaymentMethodService;
