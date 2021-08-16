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
  try {
    processTransactions(transactions);
  } catch (error) {
    console.error(error.message);
  }
}

function processTransactions(transactions) {
  validateTransactions(transactions);
  for (const transaction of transactions) {
    try {
      processSingleTransaction(transaction);
    } catch (error) {
      console.error(error.message, transaction);
    }
  }
}

function validateTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    throw new Error('No transactions provided!');
  }
}

function processSingleTransaction(transaction) {
  validateOpenTransaction(transaction);
  let transactionProcess = getTransactionProcess(transaction);
  transactionProcess.process();
}

function validateOpenTransaction(transaction) {
  if (transaction.status !== 'OPEN') {
    throw new Error('Invalid transaction type!');
  }
}

function getTransactionProcess(transaction) {
  if (transaction.type === 'PAYMENT') {
    return new PaymentProcess(transaction);
  } else if (transaction.type === 'REFUND') {
    return new RefoundProcess(transaction);
  } else {
    throw new Error('Invalid transaction type!');
  }
}

function PaymentProcess(transaction) {
  return {
    process: function() {
      let processType = getPaymentType(transaction);
      processType.process();
    }
  };
}

function RefoundProcess(transaction) {
  return {
    process: function() {
      let processType = getRefoundType(transaction);
      processType.process();
    }
  };
}

function getPaymentType(transaction) {  
  if (transaction.method === 'CREDIT_CARD') {
    return new PaymentCreditCard(transaction);
  } else if (transaction.method === 'PAYPAL') {
    return new PaymentPayPal(transaction);
  } else if (transaction.method === 'PLAN') {
    return new PaymentPlan(transaction);
  }
}

function getRefoundType(transaction) {
  if (transaction.method === 'CREDIT_CARD') {
    return new RefoundCreditCard(transaction);
  } else if (transaction.method === 'PAYPAL') {
    return new RefoundPayPal(transaction);
  } else if (transaction.method === 'PLAN') {
    return new RefoundPlan(transaction);
  }
}

function PaymentCreditCard(transaction) {
  return {
    process: function() {
      processCreditCardPayment(transaction);
    }
  };
}

function PaymentPayPal(transaction) {
  return {
    process: function() {
      processPayPalPayment(transaction);
    }
  }
}

function PaymentPlan(transaction) {
  return {
    process: function() {
      processPlanPayment(transaction);
    }
  };
}

function RefoundCreditCard(transaction) {
  return {
    process: function() {
      processCreditCardRefund(transaction);
    }
  };
}

function RefoundPayPal(transaction) {
  return {
    process: function() {
      processPayPalRefund(transaction);
    }
  };
}

function RefoundPlan(transaction) {
  return {
    process: function() {
      processPlanRefund(transaction);
    }
  };
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
