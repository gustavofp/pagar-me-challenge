import Customer from "../model/Customer";
import CustomerRepository from '../repository/Customer'
import { CustomerInterface } from "../interface/Customer";
import CustomerMap from "../mappers/Customer";
import ErrorService from './ErrorService';
class CustomerService {
  static async getCustomerById(id: number): Promise<CustomerInterface> {
    const customer: Customer | null = await CustomerRepository.getById(id);
    if (!customer) {
      throw ErrorService.customerNotFound();
    }

    const customerInterface: CustomerInterface = CustomerMap.toInterface(customer);
    return customerInterface;
  }
}

export default CustomerService;
