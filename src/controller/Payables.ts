import Controller from "../interface/Controller";
import { Request, Response, Router } from "express";
import CustomerService from "../service/Customer";
import { CustomerInterface } from "../interface/Customer";
import PayableService from "../service/Payable";
import { PayableInterface } from "../interface/Payable";

class PayablesController implements Controller {
  public path: string = '/payables';
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/:customerId`, (req: Request, res: Response) => this.getAvailablePayablesByCustomer(req, res));
  }

  private async getAvailablePayablesByCustomer(req: Request, res: Response): Promise<Response> {
    const customerId  = req.params.customerId
    try {
      const customer: CustomerInterface = await CustomerService.getCustomerById(customerId);

      const payables: PayableInterface[] = await PayableService.getPayablesByCustomerId(customerId);

      return res.send({
        customer,
        payables
      })
    } catch(err) {
      console.log(err);
      return res.send({
        err
      })
    }
  }
}

export default PayablesController;
