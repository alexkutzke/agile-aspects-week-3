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

  if (!(transactions && transactions.length > 0)) {
    console.log('No transactions provided!');

  } else {
    for (const transaction of transactions) {

      transactionType(transaction);
    }
  }
}


function transactionType(transaction) {

  switch (transaction.type) {
    case 'PAYMENT': {
      transactionStatus(transaction)
      break;
    }

    case 'REFUND': {
      transactionStatus(transaction)
      break;
    }

    default: {
      msgInvalidTransactionType(transaction)
    }
  }
}

function transactionStatus(transaction) {
  if (transaction.status === 'OPEN') {
    transactionMethod(transaction)
  } else {
    msgInvalidTransactionType(transaction)
  }
}

function transactionMethod(transaction) {
  switch (transaction.method) {
    case 'CREDIT_CARD': {
      processTypePayment(transaction);
      break;
    }

    case 'PAYPAL': {
      processTypePayment(transaction);
      break;
    }

    case 'PLAN': {
      processTypePayment(transaction);
      break;
    }

    default: {
      msgInvalidTransactionType(transaction)
    }
  }
}

function msgInvalidTransactionType(transaction) {
  console.log('Invalid transaction type!', transaction);
}

function processTypePayment(transaction) {
  switch (transaction.type) {
    case 'PAYMENT': {
      console.log('Processing ' + transaction.method + ' payment for amount: ' + transaction.amount);
      break;
    }

    case 'REFUND': {
      console.log('Processing ' + transaction.method + ' refund for amount: ' + transaction.amount);
      break;
    }
  }
}

// Functions Antigas
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
