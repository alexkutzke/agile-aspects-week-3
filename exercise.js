class TransactionProcessor {
  constructor(transactions) {
    this.transactions = transactions;
  }

  process() {
    if (!this.transactions || this.transactions.length === 0) {
      console.log('No transactions provided!');
      return;
    }

    for (const transaction of this.transactions) {
      if (this.isValidTransaction(transaction)) {
        this.processTransaction(transaction);
      } else {
        console.log('Invalid transaction:', transaction);
      }
    }
  }

  isValidTransaction(transaction) {
    const validTypes = ['PAYMENT', 'REFUND'];
    const validStatuses = ['OPEN', 'CLOSED'];
    const validMethods = ['CREDIT_CARD', 'PAYPAL', 'PLAN'];

    return (
      validTypes.includes(transaction.type) &&
      validStatuses.includes(transaction.status) &&
      validMethods.includes(transaction.method)
    );
  }

  processTransaction(transaction) {
    const methodName = `process${transaction.method
      .toLowerCase()
      .replace('_', '')}${transaction.type.toLowerCase()}`;

    if (this[methodName]) {
      this[methodName](transaction);
    } else {
      console.log('Invalid method for transaction:', transaction);
    }
  }

  processCreditCardPayment(transaction) {
    console.log(`Processing credit card payment for amount: ${transaction.amount}`);
  }

  processCreditCardRefund(transaction) {
    console.log(`Processing credit card refund for amount: ${transaction.amount}`);
  }

  processPayPalPayment(transaction) {
    console.log(`Processing PayPal payment for amount: ${transaction.amount}`);
  }

  processPayPalRefund(transaction) {
    console.log(`Processing PayPal refund for amount: ${transaction.amount}`);
  }

  processPlanPayment(transaction) {
    console.log(`Processing plan payment for amount: ${transaction.amount}`);
  }

  processPlanRefund(transaction) {
    console.log(`Processing plan refund for amount: ${transaction.amount}`);
  }
}

const transactions = [
  // ... your transactions data ...
];

const processor = new TransactionProcessor(transactions);
processor.process();
