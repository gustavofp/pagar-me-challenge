import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import Transaction from "./Transaction";

@Table({
  modelName: 'payable',
})
class Payable extends Model<Payable>{
  @PrimaryKey
  @Column
  id!: Number;

  @ForeignKey(() => Transaction)
  @Column
  id_customer!: Number;

  @BelongsTo(() => Transaction)
  transaction!: Transaction;

  @Column
  status!: string;

  @Column
  fee!: Number;

  @Column
  available_amount!: Number;

  @Column
  payment_date!: Number;
}

export default Payable;
