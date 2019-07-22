import { PayableModel, PayableInterface } from "../../src/interface/Payable";
import PayableMap from "../../src/mappers/Payable";

describe('** Testing PayableMap **', () => {
  test('Should output correct object for toInterface method', () => {
    const payableModel: PayableModel = {
      id_transaction: 1,
      available_amount: 50,
      payment_date: new Date('2019-09-01'),
      status: 'paid'
    }
    const payableInterface: PayableInterface = PayableMap.toInterface(payableModel);

    expect(payableInterface.idTransaction).toBe(payableModel.id_transaction);
    expect(payableInterface.availableAmount).toBe(payableModel.available_amount);
    expect(payableInterface.paymentDate).toStrictEqual(payableModel.payment_date);
    expect(payableInterface.status).toBe(payableModel.status);
  })

  test('Should output correct object for toModel method', () => {
    const payableInterface: PayableInterface = {
      idTransaction: 1,
      availableAmount: 50,
      paymentDate: new Date('2019-09-01'),
      status: 'paid'
    }
    const payableModel: PayableModel = PayableMap.toModel(payableInterface);

    expect(payableInterface.idTransaction).toBe(payableModel.id_transaction);
    expect(payableInterface.availableAmount).toBe(payableModel.available_amount);
    expect(payableInterface.paymentDate).toStrictEqual(payableModel.payment_date);
    expect(payableInterface.status).toBe(payableModel.status);
  })
})
