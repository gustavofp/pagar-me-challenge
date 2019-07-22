import CardService from '../../src/service/Card';
import { CardInterface, CardModel } from '../../src/interface/Card';

const cardRepositoryResponse: CardModel = {
  id: 1,
  valid_thru: new Date('2019-09'),
  owner_name: 'Gustavo Poletto',
  last_digits: 2343,
  cvv: 233
}
jest.mock('../../src/repository/Card', () => ({
  getById: jest.fn().mockImplementation(() => Promise.resolve(cardRepositoryResponse)),
  insert: jest.fn().mockImplementation(() => Promise.resolve(cardRepositoryResponse))
}))

describe('** Testing CardService **', () => {
  test('should return card by id', async () => {
    const card: CardInterface = await CardService.getCardById(10);

    expect(card && card.id).toBe(cardRepositoryResponse.id);
    expect(card && card.validThru).toBe(cardRepositoryResponse.valid_thru);
    expect(card && card.lastDigits).toBe(cardRepositoryResponse.last_digits);
    expect(card && card.cvv).toBe(cardRepositoryResponse.cvv);

    jest.clearAllMocks();
  })

  test('should  create new card', async () => {
    const cardInterface: CardInterface = {
      validThru: new Date('2019-09'),
      ownerName: 'Gustavo Poletto',
      lastDigits: 2343,
      cvv: 233
    }
    const card: CardInterface = await CardService.createCard(cardInterface);

    expect(card && card.validThru).toStrictEqual(cardInterface.validThru);
    expect(card && card.lastDigits).toBe(cardInterface.lastDigits);
    expect(card && card.cvv).toBe(cardInterface.cvv);

    jest.clearAllMocks();
  })
})

