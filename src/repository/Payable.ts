import { PayableModel } from '../interface/Payable';
import Payable from '../model/Payable';

class PayableRepository {
  static async insert(payableData: PayableModel): Promise<Payable> {
    const payable: Payable = new Payable(payableData)
    await payable.save();

    return payable;
  }
}

export default PayableRepository;
