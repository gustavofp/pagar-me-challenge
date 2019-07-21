import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';
import Transaction from './Transaction';

@Table({
  modelName: 'payment_method'
})
class PaymentMethod extends Model<PaymentMethod> {

  @PrimaryKey
  @Column
  name!: string;

  @Column
  description!: string;

  @Column
  fee!: number;

  @HasMany(() => Transaction)
  transaction!: Transaction[];
}

export default PaymentMethod;
