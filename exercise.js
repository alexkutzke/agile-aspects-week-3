main();

function main() {
  const transactions = [{
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

function openTransaction(transaction) {
  switch (transaction.type) {
    case 'REFUND':
      refundTransaction(transaction);
      break;
    case 'PAYMENT':
      paymentTransaction(transaction);
      break;
    default:
      throw new Error('Invalid transaction type! ' + transaction.type);
  }
}

function paymentTransaction(transaction) {
  if (transaction.status === 'OPEN') {
    processPaymentTypeTransaction(transaction);
  } else {
    throw new Error('Invalid transaction status! ' + transaction.status);
  }
}

function refundTransaction(transaction) {
  if (transaction.status === 'OPEN') {
    processRefundTypeTransaction(transaction);
  } else {
    throw new Error('Invalid transaction status! ' + transaction.status);
  }
}

function processPaymentTypeTransaction(transaction) {
  var paymentTypes = {
    'CREDIT_CARD': processCreditCardPayment,
    'PAYPAL': processPayPalPayment,
    'PLAN': processPlanPayment
  };

  if (paymentTypes[transaction.method] === undefined) {
    throw new Error('Invalid transaction method! ' + transaction.method);
  }
  paymentTypes[transaction.method](transaction);
}


function processRefundTypeTransaction(transaction) {
  var paymentTypes = {
    'CREDIT_CARD': processCreditCardRefund,
    'PAYPAL': processPayPalRefund,
    'PLAN': processPlanRefund
  };
  if (paymentTypes[transaction.method] === undefined) {
    throw new Error('Invalid transaction method! ' + transaction.method);
  }
  paymentTypes[transaction.method](transaction);
}

function processTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    console.log('No transactions provided!');
    return;
  }
  for (const transaction of transactions) {
    try {
      openTransaction(transaction)
    } catch (error) {
      console.log(error.message)
    }
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