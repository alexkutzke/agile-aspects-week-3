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
  try {
    hasTransactions(transactions);
  } catch(error) {
    console.log(error.message);
  }

  for (const transaction of transactions) {
    if (validateTransactionStatusAndType(transaction)) {
      processCurrentTransaction(transaction);
    }
  }
}

function hasTransactions(transactions) {
  if (!transactions || transactions.length <= 0) {
    throw new Error('No transactions provided!');
  }
}

function validateTransactionStatusAndType(transaction) {
  let isValid = true;
  if (transaction.status !== 'OPEN' || 
      (transaction.type !== 'PAYMENT' && 
       transaction.type !== 'REFUND')
     ) {
    console.log('Invalid transaction type!', transaction);
    isValid = false;
  }
  return isValid;
}

function processCurrentTransaction(transaction) {
  const method = transaction.method.toLowerCase().replace('_', ' ');
  const type = transaction.type.toLowerCase();
  console.log('Processing ' + method + ' ' + type + ' for amount: ' + transaction.amount);
}
