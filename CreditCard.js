const BaseProcess = require("./BaseProcess");

class CreditCard extends BaseProcess {
  processPayment(transaction) {
    console.log(
      "Processing credit card payment for amount: " + transaction.amount
    );
  }
  processRefund(transaction) {
    console.log(
      "Processing credit card refund for amount: " + transaction.amount
    );
  }
}

module.exports = CreditCard;
