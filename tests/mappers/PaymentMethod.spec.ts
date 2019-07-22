import { PaymentMethodModel, PaymentMethodInterface } from "../../src/interface/PaymentMethod";
import PaymentMethodMap from "../../src/mappers/PaymentMethod";

describe('** Testing PaymentMethod Map**', () => {
  test('Should output correct object for toInterface method', () => {
    const paymentMethodModel: PaymentMethodModel = {
      name: 'debit_ card',
      description: 'Débito',
      fee: 10
    }

    const paymentMethodInterface: PaymentMethodInterface = PaymentMethodMap.toInterface(paymentMethodModel);

    expect(paymentMethodInterface.description).toBe(paymentMethodModel.description)
    expect(paymentMethodInterface.fee).toBe(paymentMethodModel.fee)
    expect(paymentMethodInterface.name).toBe(paymentMethodModel.name)
  })
})
