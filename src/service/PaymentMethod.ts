import { PaymentMethodInterface } from "../interface/PaymentMethod";
import PaymentMethod from "../model/PaymentMethod";
import PaymentMethodRepository from "../repository/PaymentMethod";
import PaymentMethodMap from "../mappers/PaymentMethod";
import ErrorService from "./ErrorService";

class PaymentMethodService {
  static async getPaymentMethodByName(name: string): Promise<PaymentMethodInterface> {
    const paymentMethod: PaymentMethod | null = await PaymentMethodRepository.getByName(name);
    if (!paymentMethod) {
      throw ErrorService.paymentMethodNotFound();
    }

    const paymentMethodInterface: PaymentMethodInterface = PaymentMethodMap.toInterface(paymentMethod);
    return paymentMethodInterface;
  }
}

export default PaymentMethodService;
