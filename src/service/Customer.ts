import Customer from "../model/Customer";
import CustomerRepository from '../repository/Customer'
import { CustomerInterface } from "../interface/Customer";
import CustomerMap from "../mappers/Customer";

class CustomerService {
  static async getCustomerById(id: number): Promise<CustomerInterface> {
    const customer: Customer | null = await CustomerRepository.getById(id);
    if (!customer) {
      throw new Error();
    }

    const customerInterface: CustomerInterface = CustomerMap.toInterface(customer);
    return customerInterface;
  }
}

export default CustomerService;
