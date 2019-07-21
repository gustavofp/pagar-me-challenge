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
import { NextFunction } from "connect";

class TransactionController implements Controller {
  public path: string = '/transaction';
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/:customerId`, (req: Request, res: Response, next: NextFunction) => this.getByCustomer(req, res, next));
    this.router.post(`${this.path}/`, (req: Request, res: Response, next: NextFunction) => this.insert(req, res, next));
  }

  private async getByCustomer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const customerId  = req.params.customerId
    try {
      const customer: CustomerInterface = await CustomerService.getCustomerById(customerId);

      const transactions: TransactionInterface[] = await TransactionService.getTransactionsByCustomerId(customerId);

      return res.send({
        customer,
        transactions
      })
    } catch(err) {
      return next(err)
    }
  }

  private async insert(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
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
      return next(err);
    }
  }
}

export default TransactionController;
