const BaseProcess = require("./BaseProcess");

class Plan extends BaseProcess {
  processPayment(transaction) {
    console.log("Processing plan payment for amount: " + transaction.amount);
  }
  processRefund(transaction) {
    console.log("Processing plan refund for amount: " + transaction.amount);
  }
}

module.exports = Plan;
