import Card from '../model/Card';

class CardRepository {
  static async getById(id: number): Promise<Card | null> {
    const card: Card | null = await Card.findByPk(id);
    return card;
  }
}

export default CardRepository;
