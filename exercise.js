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
  if (!transactions || transactions.length === 0) {
    console.log('No transactions provided!');
    return;
  }

  for (const transaction of transactions) {
    if (isValidTransaction(transaction)) {
      processTransaction(transaction);
    } else {
      console.log('Invalid transaction type!', transaction);
    }
  }
}

function isValidTransaction(transaction) {
  const validTypes = ['PAYMENT', 'REFUND'];
  const validStatus = ['OPEN', 'CLOSED'];
  const validMethods = ['CREDIT_CARD', 'PAYPAL', 'PLAN'];

  return (
    validTypes.includes(transaction.type) &&
    validStatus.includes(transaction.status) &&
    validMethods.includes(transaction.method)
  );
}

function processTransaction(transaction) {
  const typeHandlers = {
    PAYMENT: {
      OPEN: {
        CREDIT_CARD: processCreditCardPayment,
        PAYPAL: processPayPalPayment,
        PLAN: processPlanPayment,
      },
    },
    REFUND: {
      OPEN: {
        CREDIT_CARD: processCreditCardRefund,
        PAYPAL: processPayPalRefund,
        PLAN: processPlanRefund,
      },
    },
  };

  const handler =
    typeHandlers[transaction.type]?.[transaction.status]?.[transaction.method];

  if (handler) {
    handler(transaction);
  } else {
    console.log('Invalid transaction type or status!', transaction);
  }
}

function processCreditCardPayment(transaction) {
  console.log('Processing credit card payment for amount: ' + transaction.amount);
}

function processCreditCardRefund(transaction) {
  console.log('Processing credit card refund for amount: ' + transaction.amount);
}

function processPayPalPayment(transaction) {
  console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}
