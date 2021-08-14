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
  
  if (noTransactions(transactions)) {
    return console.log('No transactions provided!');
  }    
    transactions.forEach(transaction => validateAndProcessTransaction(transaction));

}

function noTransactions(transactions) {
  let areThereTransactions = transactions && transactions.length > 0;
  return !areThereTransactions;
}

function validateAndProcessTransaction(transaction) {
  if(isNotValidTransaction(transaction)) {
    console.log('Invalid transaction!', transaction);
  } 
  else {
    processTransaction(transaction);
  }
}

function isNotValidTransaction(transaction) {
  let isValidTransaction = (transaction.type == 'PAYMENT' || transaction.type == 'REFUND') && (transaction.status == 'OPEN');
  return !isValidTransaction;
}

function processTransaction(transaction) {
  
  if (transaction.type === 'PAYMENT') {
    processPayment(transaction);
  } 
  if (transaction.type === 'REFUND') {
    processRefund(transaction);
  }

}

function processPayment(transaction) {

  if (transaction.method === 'CREDIT_CARD') {
    processCreditCardPayment(transaction);
  } else if (transaction.method === 'PAYPAL') {
    processPayPalPayment(transaction);
  } else if (transaction.method === 'PLAN') {
    processPlanPayment(transaction);
  }

}
      
function processRefund(transaction) {

  if (transaction.method === 'CREDIT_CARD') {
    processCreditCardRefund(transaction);
  } else if (transaction.method === 'PAYPAL') {
    processPayPalRefund(transaction);
  } else if (transaction.method === 'PLAN') {
    processPlanRefund(transaction);
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
