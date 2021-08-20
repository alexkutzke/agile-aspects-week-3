class BasePaymentMethod {
  processPayment(transaction) {}
  processRefund(transaction) {}
}

class CredidCard extends BasePaymentMethod {
  processPayment(transaction) {
    console.log(
      'Processing credit card payment for amount: ' + transaction.amount
    );
  }

  processRefund(transaction) {
    console.log(
      'Processing credit card refund for amount: ' + transaction.amount
    );
  }
}

class PayPal extends BasePaymentMethod {
  processPayment(transaction) {
    console.log('Processing PayPal payment for amount: ' + transaction.amount);
  }

  processRefund(transaction) {
    console.log('Processing PayPal refund for amount: ' + transaction.amount);
  }
}

class Plan extends BasePaymentMethod {
  processPayment(transaction) {
    console.log('Processing plan payment for amount: ' + transaction.amount);
  }

  processRefund(transaction) {
    console.log('Processing plan refund for amount: ' + transaction.amount);
  }
}

main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions) {
  validateTransactionsList(transactions);

  for (const transaction of transactions) {
    if (!isValidTransaction(transaction)) {
      console.log('Invalid transaction type!', transaction);
      continue;
    }

    const paymentMethod = new makePaymentMethod(transaction);

    if (isPayment(transaction)) {
      paymentMethod.processPayment(transaction);
    } else {
      paymentMethod.processRefund(transaction);
    }
  }
}

function validateTransactionsList(transactions) {
  if (!transactions || transactions.length === 0) {
    throw new Error('No transactions provided!');
  }
}

function isValidTransaction(transaction) {
  return (
    isOpen(transaction) && (isPayment(transaction) || isRefund(transaction))
  );
}

function isOpen(transaction) {
  return transaction.status === 'OPEN';
}

function isPayment(transaction) {
  return transaction.type === 'PAYMENT';
}

function isRefund(transaction) {
  return transaction.type === 'REFUND';
}

function makePaymentMethod(transaction) {
  switch (transaction.method) {
    case 'CREDIT_CARD':
      return new CredidCard();
    case 'PAYPAL':
      return new PayPal();
    case 'PLAN':
      return new Plan();
    default:
      throw new Error('Invalid Payment Method');
  }
}
