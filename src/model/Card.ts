import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import Transaction from './Transaction';

@Table({
  modelName: 'card',
})
class Card extends Model<Card> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  last_digits!: number;

  @Column
  cvv!: number;

  @Column
  valid_thru!: Date;

  @Column
  owner_name!: string;

  @HasMany(() => Transaction)
  transaction!: Transaction[];
}

export default Card;
