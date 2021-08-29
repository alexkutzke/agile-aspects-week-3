import BaseTransaction from "./base";

export default class PlanTransaction extends BaseTransaction {
    processPayment(transaction) {
        console.log(`Processing plan payment for amount ${transaction.amount}`);
    }

    processRefund(transaction) {
        console.log(`Processing plan refund for amount ${transaction.amount}`);
    }
}