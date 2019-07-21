import { Request, Response, Router } from "express";
import { TransactionInterface, TransactionRequest } from '../interface/Transaction';
import TransactionService from '../service/Transaction';
import { PayableInterface } from '../interface/Payable';
import Controller from '../interface/Controller';
import Transaction from '../model/Transaction';
import { CardInterface } from "../interface/Card";
import CardService from "../service/Card";
import { CustomerInterface } from "../interface/Customer";
import CustomerService from "../service/Customer";
import PaymentMethodService from "../service/PaymentMethod";
import { PaymentMethodInterface } from "../interface/PaymentMethod";
import PayableService from "../service/Payable";

class TransactionController implements Controller {
  public path: string = '/transaction';
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/`, (res: Response) => this.getAll(res));
    this.router.post(`${this.path}/`, (req: Request, res: Response) => this.insert(req, res));
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

      const customer: CustomerInterface = await CustomerService.getCustomerById(transactionRequest.id_customer);
      const card: CardInterface = await CardService.getCardById(transactionRequest.id_card);
      const paymentMethod: PaymentMethodInterface = await PaymentMethodService.getPaymentMethodByName(transactionRequest.payment_method);
      const transaction: TransactionInterface = await TransactionService.insertTransaction(transactionRequest);
      const payableData: PayableInterface = await PayableService.insertPayableForTransaction(transaction, paymentMethod);

      return res.send(
        {
          success: true,
          customerId: customer.id,
          cardId: card.id,
          paymentMethod: paymentMethod.name,
          transaction: transaction.id,
          payable: payableData.id
        }
      )
    } catch(err) {
      console.log(err);
      return res.send({
        success: false,
        error: err
      })
    }
  }
}

export default TransactionController;
