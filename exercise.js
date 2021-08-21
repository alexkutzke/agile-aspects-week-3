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
  if (hasTransactions(transactions)) {
    for (const transaction of transactions) {
      processTransactionByType(transaction)
    }
  }
}

function processTransactionByType(transaction) {
  if (getTransactionType(transaction) === 'PAYMENT' && getTransactionStatus(transaction)) {
    processTransactionMethod(transaction)
  } else if (getTransactionType(transaction) === 'REFUND' && getTransactionStatus(transaction)) {
    processTransactionMethod(transaction)
  }
}

function getTransactionType(transaction) {
  if (transaction.type !== 'PAYMENT' && transaction.type !== 'REFUND') {
    console.log("Invalid transaction type!!!", transaction.type)
  }
  return transaction.type
}

function getTransactionStatus(transaction) {
  if (transaction.status !== 'OPEN') {
    console.log('Transaction is CLOSED', transaction);
    return false
  }
  return true
}

function processTransactionMethod(transaction) {
  switch (transaction.method) {
    case 'CREDIT_CARD':
      processCreditCardPayment(transaction);
      break;
    case 'PAYPAL':
      processPayPalPayment(transaction);
      break;
    case 'PLAN':
      processPlanPayment(transaction);
      break;  
    default:
      console.log("Invalid transaction method")
      break;
  }

}

function hasTransactions(transactions) {
  if (transactions && transactions.length > 0) {
    return true
  } else {
    console.log("No transactions provided!")
    return false
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
