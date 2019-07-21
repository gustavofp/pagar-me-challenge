import { PayableModel } from '../interface/Payable';
import Payable from '../model/Payable';
import Transaction from '../model/Transaction';

class PayableRepository {
  static async insert(payableData: PayableModel): Promise<Payable> {
    const payable: Payable = new Payable(payableData)
    await payable.save();

    return payable;
  }

  static async getByCustomerId(customerId: number): Promise<Payable[]> {
    const payables: Payable[] = await Payable.findAll({
      include: [{
        model: Transaction,
        where: { id_customer: customerId }
      }]
    })

    return payables;
  }
}

export default PayableRepository;
