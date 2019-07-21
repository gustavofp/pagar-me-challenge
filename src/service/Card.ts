import Card from "../model/Card";
import CardRepository from '../repository/Card'
import { CardInterface, CardModel } from "../interface/Card";
import CardMap from "../mappers/Card";

class CardService {
  static async getCardById(id: number): Promise<CardInterface> {
    const card: Card | null = await CardRepository.getById(id);
    if (!card) {
      throw new Error();
    }

    const cardInterface: CardInterface = CardMap.toInterface(card);
    return cardInterface;
  }

  static async createCard(card: CardInterface): Promise<CardInterface> {
    const cardModel: CardModel = CardMap.toModel(card);
    const cardEntity: Card | null = await CardRepository.insert(cardModel)
    if (!cardEntity) {
      throw new Error();
    }

    return CardMap.toInterface(cardEntity);
  }
};

export default CardService;
