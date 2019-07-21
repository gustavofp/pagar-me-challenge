import Customer from '../model/Customer';

class CustomerRepository {
  static async getById(id: number): Promise<Customer | null> {
    const customer: Customer | null = await Customer.findByPk(id);

    return customer;
  }
}

export default CustomerRepository;
