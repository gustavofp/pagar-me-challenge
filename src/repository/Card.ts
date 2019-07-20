import Card from '../model/Card';

class CardRepository {
  static async getById(id: number): Promise<Card> {
    const card: Card | null = await Card.findByPk(id);
    if (!card) {
      throw new Error();
    }

    return card;
  }
}

export default CardRepository;
