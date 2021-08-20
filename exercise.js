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
  
  if (!isTransactionProvided(transactions))
     return console.log('No transactions provided!');
  

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function processTransaction(transaction){

  if(isInvalidTransactionType(transaction)){
    console.log('Invalid transaction type!', transaction);
    return;
  }

  if(isPaymentTransaction(transaction)){
    processPaymentTransaction(transaction);
    return;
  }
    
  processRefundTransaction(transaction);
}

function processRefundTransaction(transaction){
  switch (transaction.method ) {
    case 'CREDIT_CARD':
      processCreditCardRefund(transaction);
      break;
    case 'PAYPAL':
      processPayPalRefund(transaction);
      break;
    default:
      processPlanRefund(transaction);
  }
}

function processPaymentTransaction(){
  switch (transaction.method ) {
    case 'CREDIT_CARD':
      processCreditCardPayment(transaction);
      break;
    case 'PAYPAL':
      processPayPalPayment(transaction);
      break;
    default:
      processPlanPayment(transaction);
  }
}

function isPaymentTransaction(){
  return transaction.type === 'PAYMENT';
}

function isInvalidTransactionType(transaction){
  return transaction.type != 'OPEN';
}


function isTransactionProvided(transactions) {
  return transactions && transactions.length > 0;
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
