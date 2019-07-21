import Card from "../model/Card";
import { CardInterface } from '../interface/Card'

class CardMap {
  static toInterface(card: Card): CardInterface {
    return {
      id: card.id,
      lastDigits: card.last_digits,
      cvv: card.cvv,
      validThru: card.valid_thru,
    }
  }
}

export default CardMap;
