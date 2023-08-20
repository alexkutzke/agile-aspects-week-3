main();

function main() {
  const Transaction = require('./model/Transaction');

  const transactions = [
    new Transaction('t1', 'PAYMENT', 'OPEN', 'CREDIT_CARD', '23.99'),
    new Transaction('t2', 'PAYMENT', 'OPEN', 'PAYPAL', '100.43'),
    new Transaction('t3', 'REFUND', 'OPEN', 'CREDIT_CARD', '10.99'),
    new Transaction('t4', 'PAYMENT', 'CLOSED', 'PLAN', '15.99'),
  ];

  if(isValid(transactions)){
    processTransactions(transactions);
  }
}

function isValid(transactions) {
  if (transactions && transactions.length > 0) {
    return true;
  }
  return false;
}

function processTransactions(transactions) {
  for (const transaction of transactions) {
    transaction.process();
  }
}