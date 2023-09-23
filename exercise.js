main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT',
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
      method: 'CREDIT',
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
    validateContent(transactions);
    for (const transaction of transactions) {
        processTransaction(transaction);
    }
} catch (error) {
    console.log(error.message)
}
}

function validateContent(transactions) {
if (!transactions || transactions.length < 1) {
    throw new Error('No transactions provided!');
}
}

function processTransaction(transaction) {
switch (transaction.type) {
    case 'PAYMENT':
        processPayment(transaction);
        break;
    case 'REFUND':
        processRefund(transaction);
        break;
    default:
        throw new Error(`Invalid transaction type: ${transaction.type}`);
}
}

function processPayment(transaction) {
isOpenTransaction(transaction);
switch (transaction.method) {
    case 'CREDIT':
        processCreditPayment(transaction);
        break;
    case 'PAYPAL':
        processPayPalPayment(transaction);
        break;
    case 'PLAN':
        processPlanPayment(transaction);
        break;
    default:
        throw new Error(`Invalid transaction method: ${transaction.method}`);
}
}

function processRefund(transaction) {
  isOpenTransaction(transaction);
  switch (transaction.method) {
      case 'CREDIT':
          processCreditRefund(transaction);
          break;
      case 'PAYPAL':
          processPayPalRefund(transaction);
          break;
      case 'PLAN':
          processPlanRefund(transaction);
          break;
      default:
          throw new Error(`Invalid transaction method: ${transaction.method}`);
  }

}

function isOpenTransaction(transaction) {
  if (transaction.status !== 'OPEN') {
      throw new Error(`Invalid transaction status: ${transaction.status}`);
  }
}

function processCreditPayment(transaction) {
  console.log(
    'Processing credit payment for amount: ' + transaction.amount
  );
}

function processCreditRefund(transaction) {
  console.log(
    'Processing credit refund for amount: ' + transaction.amount
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
