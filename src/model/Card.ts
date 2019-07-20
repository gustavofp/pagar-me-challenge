import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';
import Transaction from './Transaction';

@Table({
  modelName: 'card',
})
class Card extends Model<Card> {
  @PrimaryKey
  @Column
  id!: Number;

  @Column
  last_digits!: Number;

  @Column
  cvv!: Number;

  @Column
  valid_thru!: Date;

  @HasMany(() => Transaction)
  transaction!: Transaction[];
}

export default Card;
