import Customer from "../model/Customer";
import { CustomerInterface, CustomerModel } from "../interface/Customer";

class CustomerMap {
  static toInterface(customer: Customer | CustomerModel): CustomerInterface {
    return {
      id: customer.id,
      firstName: customer.first_name,
      lastName: customer.last_name,
      cpf: customer.cpf
    }
  }
}

export default CustomerMap;
