const BaseProcess = require("./BaseProcess");

class Paypal extends BaseProcess {
  processPayment(transaction) {
    console.log("Processing PayPal payment for amount: " + transaction.amount);
  }
  processRefund(transaction) {
    console.log("Processing PayPal refund for amount: " + transaction.amount);
  }
}

module.exports = Paypal;
