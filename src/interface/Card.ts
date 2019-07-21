export interface CardInterface {
  id?: number,
  lastDigits: number,
  cvv: number,
  validThru: Date,
  ownerName: string
}

export interface CardModel {
  id?: number,
  last_digits: number,
  cvv: number,
  valid_thru: Date,
  owner_name: string
}
