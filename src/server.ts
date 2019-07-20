import App from './app';
import TransactionController from './controller/Transaction';

const app = new App(
  [
    new TransactionController()
  ],
);

app.listen();
