import BaseTransaction from "./base";

class CreditCardTransaction extends BaseTransaction {
    processPayment(transaction) {
        console.log("Processing credit card payment for amount: " + transaction.amount);
    }

    processRefund(transaction) {
        console.log("Processing credit card refund for amount: " + transaction.amount);
    }
}

export default CreditCardTransaction;