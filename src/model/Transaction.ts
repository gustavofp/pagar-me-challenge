import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasMany, DefaultScope } from 'sequelize-typescript';
import Customer from './Customer';
import Card from './Card';
import PaymentMethod from './PaymentMethod';
import Payable from './Payable';

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

  @BelongsTo(() => Customer, 'id_customer')
  customer!: Customer;

  @ForeignKey(() => Card)
  @Column
  id_card!: number;

  @BelongsTo(() => Card, 'id_card')
  card!: Card;

  @Column
  transaction_date!: Date;

  @ForeignKey(() => PaymentMethod)
  @Column
  payment_method!: string;

  @BelongsTo(() => PaymentMethod, 'payment_method')
  paymentMethod!: PaymentMethod;

  @Column
  amount!: number;

  @Column
  description!: string;

  @HasMany(() => Payable)
  payables!: Payable[]
}

export default Transaction;
