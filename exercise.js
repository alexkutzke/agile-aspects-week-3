main();

function main() {
  const transactionBatch = [
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

  processTransactions(transactionBatch);
}

function processTransactions(transactionBatch) {
  if ( transactionsAreValid(transactionBatch) ) {
    for (const transaction of transactionBatch) {
      processTransactionByType(transaction);
    }
  } else {
    console.log('No transactions provided!');
  }
}

function processTransactionByType(transaction) {
  if (transaction.type === 'PAYMENT') {
    processPayment(transaction);
  } else if (transaction.type === 'REFUND') {
    processRefund(transaction);
  } else {
    console.log('Invalid transaction type!', transaction);
  }
}

function processRefund(transaction) {
  if (transaction.status === 'OPEN') {
    if (transaction.method === 'CREDIT_CARD') {
      processCreditCardRefund(transaction);
    } else if (transaction.method === 'PAYPAL') {
      processPayPalRefund(transaction);
    } else if (transaction.method === 'PLAN') {
      processPlanRefund(transaction);
    }
  } else {
    console.log('Invalid transaction type!', transaction);
  }
}

function processPayment(transaction) {
  if (transaction.status === 'OPEN') {
    if (transaction.method === 'CREDIT_CARD') {
      processCreditCardPayment(transaction);
    } else if (transaction.method === 'PAYPAL') {
      processPayPalPayment(transaction);
    } else if (transaction.method === 'PLAN') {
      processPlanPayment(transaction);
    }
  } else {
    console.log('Invalid transaction type!', transaction);
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

function transactionsAreValid(transactions) {
  return (transactions && transactions.length > 0);
}