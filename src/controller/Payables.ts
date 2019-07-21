import Controller from "../interface/Controller";
import { Request, Response, Router } from "express";
import CustomerService from "../service/Customer";
import { CustomerInterface } from "../interface/Customer";
import PayableService from "../service/Payable";
import { PayableInterface, Status } from "../interface/Payable";
import { NextFunction } from "connect";

class PayablesController implements Controller {
  public path: string = '/payables';
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/waiting-funds/:customerId`, (req: Request, res: Response, next: NextFunction) => this.getWaitingFundsPayablesByCustomer(req, res, next));
    this.router.get(`${this.path}/available/:customerId`, (req: Request, res: Response, next: NextFunction) => this.getAvailablePayablesByCustomer(req, res, next));
    this.router.get(`${this.path}/:customerId`, (req: Request, res: Response, next: NextFunction) => this.getPayablesByCustomer(req, res, next));
  }

  private async getWaitingFundsPayablesByCustomer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const customerId  = req.params.customerId
    try {
      const customer: CustomerInterface = await CustomerService.getCustomerById(customerId);

      const payables: PayableInterface[] = await PayableService.getPayablesByCustomerIdAndStatus(customerId, Status.WAITING_FUNDS);

      return res.send({
        customer,
        payables
      })
    } catch(err) {
      return next(err);
    }
  }

  private async getAvailablePayablesByCustomer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const customerId  = req.params.customerId
    try {
      const customer: CustomerInterface = await CustomerService.getCustomerById(customerId);

      const payables: PayableInterface[] = await PayableService.getPayablesByCustomerIdAndStatus(customerId, Status.PAID);

      return res.send({
        customer,
        payables
      })
    } catch(err) {
      return next(err);
    }
  }


  private async getPayablesByCustomer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const customerId  = req.params.customerId
    try {
      const customer: CustomerInterface = await CustomerService.getCustomerById(customerId);

      const payables: PayableInterface[] = await PayableService.getPayablesByCustomerId(customerId);

      return res.send({
        customer,
        payables
      })
    } catch(err) {
      return next(err);
    }
  }
}

export default PayablesController;
