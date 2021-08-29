import TransactionMethod from '../transcationEnums/transactionMethod.js'
import CreditCardTransaction from '../transactionMethods/creditCard.js'
import PayPalTransaction from '../transactionMethods/paypal.js';
import PlanTransaction from '../transactionMethods/plan.js';

class TransactionMethodFactory {
    constructor(transaction) {
        this.transaction = transaction;
    }

    execute() {
        if (!this.transaction.method) {
            throw new Error('Transaction method is not defined');
        }
        
        switch (this.transaction.method) {
            case TransactionMethod.CREDIT_CARD:
                return new CreditCardTransaction();
            case TransactionMethod.PAYPAL:
                return new PayPalTransaction();
            case TransactionMethod.PLAN:
                return new PlanTransaction();
            default:
                throw new Error('Transaction method is not defined');
        }
    }
}

export default TransactionMethodFactory;