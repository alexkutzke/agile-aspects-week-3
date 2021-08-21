const CreditCard = require("./CreditCard");
const Paypal = require("./Paypal");
const Plan = require("./Plan");
const TransactionMethodEnum = require("./TransactionMethodEnum");

class ProcessMethodFactory {
  constructor(transaction) {
    this.transaction = transaction;
  }

  _isTransactionMethodNull() {
    return !this.transaction.method;
  }

  build() {
    if (this._isTransactionMethodNull()) {
      console.log("Is null transaction method!", this.transaction);
      return;
    }
    switch (this.transaction.method) {
      case TransactionMethodEnum.CREDIT_CARD:
        return new CreditCard();
      case TransactionMethodEnum.PAYPAL:
        return new Paypal();
      case TransactionMethodEnum.PLAN:
        return new Plan();
      default:
        console.log("Invalid transaction type!", this.transaction);
    }
  }
}

module.exports = ProcessMethodFactory;
