import { CardInterface, CardModel } from '../../src/interface/Card'
import CardMap from '../../src/mappers/Card';


describe('** Testing CardMap **', () => {
  test('Testing CardMapper toModel function', () => {
    const card: CardInterface = {
      lastDigits: 2345,
      cvv: 345,
      validThru: new Date('2019-09'),
      ownerName: 'Gustavo Felipe Poletto'
    }

    const cardModel: CardModel = CardMap.toModel(card)
    expect(cardModel.cvv).toBe(card.cvv);
    expect(cardModel.last_digits).toBe(card.lastDigits);
    expect(cardModel.valid_thru).toBe(card.validThru);
    expect(cardModel.owner_name).toBe(card.ownerName);
  })

  test('Testing CardMapper toInterface function', () => {
    const card: CardModel = {
      last_digits: 2345,
      cvv: 345,
      valid_thru: new Date('2019-09'),
      owner_name: 'Gustavo Felipe Poletto'
    }

    const cardModel: CardInterface = CardMap.toInterface(card)
    expect(card.cvv).toBe(cardModel.cvv);
    expect(card.last_digits).toBe(cardModel.lastDigits);
    expect(card.valid_thru).toBe(cardModel.validThru);
    expect(card.owner_name).toBe(cardModel.ownerName);
  })


})
