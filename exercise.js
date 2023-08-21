
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

function main(transactions) {
  processTransactions(transactions);
}

function processTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    console.log('No transactions provided!');
    return;
  }

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function processTransaction(transaction) {
  if (transaction.status !== 'OPEN') {
    console.log('Invalid transaction status!', transaction);
    return;
  }

  const processors = {
    PAYMENT: {
      CREDIT_CARD: processCreditCardPayment,
      PAYPAL: processPayPalPayment,
      PLAN: processPlanPayment,
    },
    REFUND: {
      CREDIT_CARD: processCreditCardRefund,
      PAYPAL: processPayPalRefund,
      PLAN: processPlanRefund,
    },
  };

  const process = processors[transaction.type]?.[transaction.method];

  if (process) {
    process(transaction);
  } else {
    console.log('Invalid transaction type or method!', transaction);
  }
}

function processCreditCardPayment(transaction) {
  console.log(
    'Processing credit card payment for amount: ' + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    'Processing credit card refund for amount: ' + transaction.amount
  );
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

main(transactions);