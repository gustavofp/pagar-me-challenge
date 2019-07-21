import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import Transaction from "./Transaction";

@Table({
  modelName: 'payable',
})
class Payable extends Model<Payable>{
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: Number;

  @ForeignKey(() => Transaction)
  @Column
  id_transaction!: number;

  @BelongsTo(() => Transaction)
  transaction!: Transaction;

  @Column
  status!: string;

  @Column
  available_amount!: number;

  @Column
  payment_date!: Date;
}

export default Payable;
