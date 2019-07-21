import App from './app';
import TransactionController from './controller/Transaction';
import PayablesController from './controller/Payables';


const app = new App(
  [
    new TransactionController(),
    new PayablesController()
  ],
);

app.listen();
