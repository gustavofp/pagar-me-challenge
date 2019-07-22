import { CreateTransactionRequest, TransactionInterface } from '../../src/interface/Transaction';
import { CardInterface } from '../../src/interface/Card';
import CreateTransactionRequestMap from '../../src/mappers/CreateTransactionRequest';

describe('** Testing CreateTransactionRequest Map **', () => {
  test('Testing toCardInterface function', () => {
    const request: CreateTransactionRequest = {
      id_customer: 1,
      payment_method: 'debit_card',
      cvv: 444,
      card_number: 989378237,
      owner_name: 'Gustavo Poletto',
      description: 'Compra teste',
      amount: 100,
      valid_thru: new Date('2019-09')
    }

    const card: CardInterface = CreateTransactionRequestMap.toCardInterface(request);

    expect(card.cvv).toBe(request.cvv);
    expect(card.ownerName).toBe(request.owner_name);
    expect(card.lastDigits).toBe(8237);
    expect(card.validThru).toBe(request.valid_thru);
  });

  test('Testing toTransactionInterface function', () => {
    const request: CreateTransactionRequest = {
      id_customer: 1,
      payment_method: 'debit_card',
      cvv: 444,
      card_number: 989378237,
      owner_name: 'Gustavo Poletto',
      description: 'Compra teste',
      amount: 100,
      valid_thru: new Date('2019-09')
    }
    const card: CardInterface = {
      ownerName: 'Poletto',
      validThru: new Date('2019-09'),
      lastDigits: 2324,
      cvv: 134,
      id: 2
    }

    const transaction: TransactionInterface = CreateTransactionRequestMap.toTransactionInterface(request, card);

    expect(transaction.amount).toBe(request.amount);
    expect(transaction.description).toBe(request.description);
    expect(transaction.idCard).toBe(card.id);
    expect(transaction.idCustomer).toBe(request.id_customer);
    expect(transaction.paymentMethod).toBe(request.payment_method);
  })
})
