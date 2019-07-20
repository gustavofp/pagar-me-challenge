import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import Customer from './Customer';
import Card from './Card';

@Table({
  modelName: 'transaction',
})
class Transaction extends Model<Transaction> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: Number;

  @ForeignKey(() => Customer)
  @Column
  id_customer!: Number;

  @BelongsTo(() => Customer)
  customer!: Customer;

  @ForeignKey(() => Card)
  @Column
  id_card!: Number;

  @BelongsTo(() => Card)
  card!: Card;

  @Column
  transaction_date!: Date;

  @Column
  payment_method!: String;

  @Column
  amount!: number;
}

export default Transaction;
