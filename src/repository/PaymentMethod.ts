import { PaymentMethodInterface } from '../interface/PaymentMethod';
import PaymentMethod from '../model/PaymentMethod';

class PaymentMethodRepository {
  static async getByName(name: string): Promise<PaymentMethod | null> {
    const paymentMethod: PaymentMethod | null = await PaymentMethod.findByPk(name);
    return paymentMethod;
  }
}

export default PaymentMethodRepository;
