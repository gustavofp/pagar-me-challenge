import Card from '../model/Card';
import { CardModel } from '../interface/Card';

class CardRepository {
  static async getById(id: number): Promise<Card | null> {
    const card: Card | null = await Card.findByPk(id);
    return card;
  }
  static async insert(card: CardModel): Promise<Card | null> {
    const cardModel: Card = new Card(card)
    await cardModel.save();

    return cardModel;
  }
}

export default CardRepository;
