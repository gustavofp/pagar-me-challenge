import CardRepository from '../../src/repository/Card';
import Card from '../../src/model/Card';

jest.mock('../../src/model/Card', () => ({
  findByPk: jest.fn().mockImplementation(() => Promise.resolve({
    id: 10
  })),
  save: jest.fn().mockImplementation(() => Promise.resolve({
    id: 10,
    last_digits:333
  })),
}))

describe('** Testing Repository **', () => {
  test('should return card by id', async () => {
    const card: Card | null = await CardRepository.getById(10);

    expect(card && card.id).toBe(10);

    jest.clearAllMocks();
  })
})
