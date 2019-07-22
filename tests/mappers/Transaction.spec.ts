import { TransactionModel, TransactionInterface } from "../../src/interface/Transaction";
import TransactionMap from "../../src/mappers/Transaction";

describe('** Testing Transaction Map**', () => {
  test('Should output correct object for toInterface method', () => {
    const transactionModel: TransactionModel = {
      id_customer: 1,
      id_card: 2,
      transaction_date: new Date('2019-08-09'),
      payment_method: 'debit_card',
      description: 'Compra',
      amount: 100
    }

    const transactionInterface: TransactionInterface = TransactionMap.toInterface(transactionModel);

    expect(transactionModel.amount).toBe(transactionInterface.amount)
    expect(transactionModel.id_customer).toBe(transactionInterface.idCustomer)
    expect(transactionModel.id_card).toBe(transactionInterface.idCard)
    expect(transactionModel.transaction_date).toBe(transactionInterface.transactionDate)
    expect(transactionModel.description).toBe(transactionInterface.description)
  })

  test('Should output correct object for toModel method', () => {
    const transactionInterface: TransactionInterface = {
      idCustomer: 1,
      idCard: 2,
      transactionDate: new Date('2019-08-09'),
      paymentMethod: 'debit_card',
      description: 'Compra',
      amount: 100
    }

    const transactionModel: TransactionModel = TransactionMap.toModel(transactionInterface);

    expect(transactionModel.amount).toBe(transactionInterface.amount)
    expect(transactionModel.id_customer).toBe(transactionInterface.idCustomer)
    expect(transactionModel.id_card).toBe(transactionInterface.idCard)
    expect(transactionModel.transaction_date).toBe(transactionInterface.transactionDate)
    expect(transactionModel.description).toBe(transactionInterface.description)
  })
})
