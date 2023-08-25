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
  if (isValidTransactionArray(transactions)) {
    transactions.forEach(transaction => {
        checkTransactionType(transaction);
    });
  } else {
    console.log('No transactions provided!');
  }
}

function isValidTransactionArray(transactions){
    return (transactions && transactions.length > 0)
}

function checkTransactionType(transaction){
    switch (transaction.type) {
        case 'PAYMENT':
            verifyStatusForPayment(transaction);
            break;
        case 'REFUND':
            verifyStatusForRefund(transaction);
            break;
        default:
            console.log('Invalid transaction type!', transaction);
            break;
    }
};

function verifyStatusForPayment(transaction){
    if (transaction.status === 'OPEN') {
        applyTransactionPaymentMethod(transaction);
    } else {
      console.log('Invalid transaction type!', transaction);
    }
}

function verifyStatusForRefund(transaction){
    if (transaction.status === 'OPEN') {
        applyTransactionRefundMethod(transaction);
    } else {
      console.log('Invalid transaction type!', transaction);
    }
}

function applyTransactionPaymentMethod(transaction){
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
      console.log('Invalid payment method, you dumbass! btw nice ass');
    break
  }
}

function applyTransactionRefundMethod(transaction){
    switch (transaction.method) {
        case 'CREDIT_CARD':
            processCreditCardRefund(transaction);
            break;
        case 'PAYPAL':
            processPayPalRefund(transaction);
            break;
        case 'PLAN':
            processPlanRefund(transaction);
            break;
        default:
            console.log('Invalid payment method, you dumbass! btw nice ass');
            break;
    }
}

function processCreditCardPayment(transaction) {
  console.log('Processing credit card payment for amount: ' + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log( 'Processing credit card refund for amount: ' + transaction.amount
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
