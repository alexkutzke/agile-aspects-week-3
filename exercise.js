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
  if (transactions && transactions.length > 0) {
    for (const transaction of transactions) {
      openTransaction(transaction);
    }
  } else {
    console.log('No transactions provided!');
  }
}

function openTransaction(transaction){
  if (transaction.type === 'PAYMENT'){
    checkTransactionStatus(transaction);
  } else if (transaction.type === 'REFUND'){
    checkTransactionStatus(transaction);
  } else {
    invalidTransactionLog(transaction);
  }
}

function checkTransactionStatus(transaction){
  switch(transaction.status) {
    case 'OPEN':
    checkTransactionMethod(transaction);
      break;
    case 'CLOSED':
      invalidTransactionLog(transaction);
      break;
    default:
      invalidTransactionLog(transaction);
      break;
  }
}

function checkTransactionMethod(transaction){
  if (transaction.method === 'CREDIT_CARD') {
    processCreditCardPayment(transaction);
  } else if (transaction.method === 'PAYPAL') {
    processPayPalPayment(transaction);
  } else if (transaction.method === 'PLAN') {
    processPlanPayment(transaction);
  } else {
    invalidTransactionLog(transaction);
  }
}

function invalidTransactionLog(transaction) {
  console.log('Invalid transaction type!', transaction);
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
