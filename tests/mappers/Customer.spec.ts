import { CustomerInterface, CustomerModel } from "../../src/interface/Customer";
import CustomerMap from '../../src/mappers/Customer';

describe('** Testing CustomerMap **', () => {
  test('should output correct properties on toInterface method', () => {
    const customerModel: CustomerModel = {
      first_name: 'Gustavo',
      last_name: 'Poletto',
      cpf: '4500030308'
    };

    const customerInterface: CustomerInterface = CustomerMap.toInterface(customerModel);

    expect(customerInterface.cpf).toBe(customerModel.cpf);
    expect(customerInterface.firstName).toBe(customerModel.first_name);
    expect(customerInterface.lastName).toBe(customerModel.last_name);
  })
})

