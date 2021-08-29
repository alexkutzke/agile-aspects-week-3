import BaseTransaction from "./base";

export default class PayPalTransaction extends BaseTransaction {
    processPayment(transaction) {
        console.log("Processing PayPal payment for amount: " + transaction.amount);
    }

    processRefund(transaction) {
        console.log("Processing PayPal refund for amount: " + transaction.amount);
    }
}