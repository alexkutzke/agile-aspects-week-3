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
  if (!transactions || transactions.length === 0) {
    console.log('No transactions provided!');
    return;
  }

  transactions.forEach((transaction) => {
    if (transaction.status !== 'OPEN') {
      console.log('Invalid transaction status!', transaction);
      return;
    }

    const processors = {
      PAYMENT: processPayment,
      REFUND: processRefund,
    };

    const processor = processors[transaction.type];

    if (processor) {
      processor(transaction);
    } else {
      console.log('Invalid transaction type!', transaction);
    }
  });
}

function processPayment(transaction) {
  const paymentMethods = {
    CREDIT_CARD: 'credit card',
    PAYPAL: 'PayPal',
    PLAN: 'plan',
  };

  const method = paymentMethods[transaction.method] || 'unknown method';

  console.log(`Processing ${method} payment for amount: ${transaction.amount}`);
}

function processRefund(transaction) {
  const refundMethods = {
    CREDIT_CARD: 'credit card',
    PAYPAL: 'PayPal',
    PLAN: 'plan',
  };

  const method = refundMethods[transaction.method] || 'unknown method';

  console.log(`Processing ${method} refund for amount: ${transaction.amount}`);
}
