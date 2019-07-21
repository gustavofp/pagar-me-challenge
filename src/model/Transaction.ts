import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import Customer from './Customer';
import Card from './Card';
import PaymentMethod from './PaymentMethod';

@Table({
  modelName: 'transaction',
})
class Transaction extends Model<Transaction> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Customer)
  @Column
  id_customer!: number;

  @BelongsTo(() => Customer)
  customer!: Customer;

  @ForeignKey(() => Card)
  @Column
  id_card!: number;

  @BelongsTo(() => Card)
  card!: Card;

  @Column
  transaction_date!: Date;

  @ForeignKey(() => PaymentMethod)
  @Column
  payment_method!: string;

  @BelongsTo(() => PaymentMethod)
  paymentMethod!: PaymentMethod;

  @Column
  amount!: number;

  @Column
  description!: string;
}

export default Transaction;
