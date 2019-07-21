import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';
import Transaction from './Transaction';

@Table({
  modelName: 'customer'
})
class Customer extends Model<Customer> {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  cpf!: string;

  @Column
  first_name!: string;

  @Column
  last_name!: string;

  @HasMany(() => Transaction)
  transaction!: Transaction[];
}

export default Customer;
