class ErrorService {
  static customerNotFound() {
    const err: Error = new Error();
    err.message = 'Customer not found';
    err.name = 'CUSTOMER_NOT_FOUND';

    return err;
  }
  static cardNotFound() {
    const err: Error = new Error();
    err.message = 'card not found';
    err.name = 'CARD_NOT_FOUND';

    return err;
  }
  static paymentMethodNotFound() {
    const err: Error = new Error();
    err.message = 'payment method not found';
    err.name = 'PAYMENT_METHOD_NOT_FOUND';

    return err;
  }
  static cannotInsertCard() {
    const err: Error = new Error();
    err.message = 'Cannot insert card';
    err.name = 'CANNOT_INSERT_CARD';

    return err;
  }
}

export default ErrorService;
