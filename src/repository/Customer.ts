import Customer from '../model/Customer';

class CustomerRepository {
  static async getById(id: number): Promise<Customer> {
    const customer: Customer | null = await Customer.findByPk(id);
    if (!customer) {
      throw new Error();
    }

    return customer;
  }
}

export default CustomerRepository;
