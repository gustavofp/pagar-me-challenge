import Card from "../model/Card";
import CardRepository from '../repository/Card'
import { CardInterface } from "../interface/Card";
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
};

export default CardService;
