import { Request, Response, Router } from "express";
import { TransactionInterface, TransactionRequest, PaymentMethods } from '../interface/Transaction';
import { PayableInterface } from '../interface/Payable';
import Controller from '../interface/Controller';
import Transaction from '../model/Transaction';
import Customer from '../model/Customer';
import Card from '../model/Card';
import CustomerRepository from '../repository/Customer';
import TransactionRepository from '../repository/Transaction';
import Payable from "src/model/Payable";
import CardRepository from "src/repository/Card";
import PayableRepository from "src/repository/Payable";

class TransactionController implements Controller {
  public path: string = '/transaction';
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/`, this.getAll);
    this.router.post(`${this.path}/`, this.insert);
  }

  private createPayableFromTransaction(transaction: Transaction): PayableInterface {
    let status: string = '';
    let paymentDate: Date = new Date();
    let fee: number = 0;

    if (transaction.payment_method === 'debit_card') {
      status = 'paid';
      paymentDate = transaction.transaction_date;
      fee = (100 * 3) / transaction.amount;
    } else if (transaction.payment_method === 'credit_card') {
      status = 'waiting_funds';
      paymentDate.setDate(transaction.transaction_date.getDate() + 30);
      fee = (100 * 5) / transaction.amount;
    }


    return {
      id_transaction: transaction.id,
      status,
      payment_date: paymentDate,
      fee,
      available_amount: transaction.amount - fee
    }
  }

  private async getAll(res: Response): Promise<Response> {
    try {
      const transactions: Transaction[] = await Transaction.findAll();

      return res.send({
        data: transactions
      })
    } catch (err) {
      return res.send({
        err
      })
    }
  }

  private async insert(req: Request, res: Response): Promise<Response> {
    try {
      const transactionRequest: TransactionRequest = req.body;

      const customer: Customer = await CustomerRepository.getById(transactionRequest.id_customer);
      const card: Card = await CardRepository.getById(transactionRequest.id_card);

      const transaction: Transaction = await TransactionRepository.insert(transactionRequest);

      const payableData: PayableInterface = this.createPayableFromTransaction(transaction);
      const payable: Payable = await PayableRepository.insert(payableData);

      return res.send({
        status: 'ok'
      })
    } catch(err) {
      return err;
    }
  }
}

export default TransactionController;
