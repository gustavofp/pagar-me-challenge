import { CreateTransactionRequest, TransactionInterface } from '../interface/Transaction';
import { CardInterface } from '../interface/Card';

class CreateTransactionRequestMap {
  static toCardInterface(request: CreateTransactionRequest): CardInterface {
    const cardNumber: string = request.card_number.toString();
    const lastDigits: string = cardNumber.substr(cardNumber.length - 4);
    return {
      lastDigits: Number(lastDigits),
      cvv: request.cvv,
      ownerName: request.owner_name,
      validThru: request.valid_thru
    }
  }
  static toTransactionInterface(request: CreateTransactionRequest, card: CardInterface): TransactionInterface {
    return {
      idCustomer: request.id_customer,
      idCard: card.id,
      transactionDate: new Date(),
      paymentMethod: request.payment_method,
      description: request.description,
      amount: request.amount
    }
  }
}

export default CreateTransactionRequestMap;
