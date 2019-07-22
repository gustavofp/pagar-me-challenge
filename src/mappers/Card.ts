import Card from "../model/Card";
import { CardInterface, CardModel } from '../interface/Card'

class CardMap {
  static toInterface(card: Card | CardModel): CardInterface {
    return {
      id: card.id,
      lastDigits: card.last_digits,
      cvv: card.cvv,
      validThru: card.valid_thru,
      ownerName: card.owner_name
    }
  }
  static toModel(card: CardInterface): CardModel {
    return {
      id: card.id,
      last_digits: card.lastDigits,
      cvv: card.cvv,
      valid_thru: card.validThru,
      owner_name: card.ownerName
    }
  }
}

export default CardMap;
