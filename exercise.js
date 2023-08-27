var json = require('./transactions.json');

const TRANSACTION_STATUS_OPEN = "OPEN"

const TRANSACTION_TYPE_PAYMENT = "PAYMENT"
const TRANSACTION_TYPE_REFUND = "REFUND"

const TRANSACTION_METHOD_CREDIT_CARD = "CREDIT_CARD"
const TRANSACTION_METHOD_PAYPAL = "PAYPAL"
const TRANSACTION_METHOD_PLAN = "PLAN"
main();


function main() {
  const transactions = json;
  processTransactions(transactions);
}

function processTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    console.log('No transactions provided!');
    return false;
  }
  for (const transaction of transactions) {
    if (!isValid(transaction)) return;
    if (transaction.type === TRANSACTION_TYPE_PAYMENT) {
      processPayment(transaction);
    } else if (transaction.type === TRANSACTION_TYPE_REFUND) {
      processRefund(transaction)
    }
  }
}

function isValid(transaction) {
  if (!isValidTransactionType(transaction)) {
    console.log('Invalid transaction type!', transaction);
    return false;
  }
  if (transaction.status !== TRANSACTION_STATUS_OPEN) {
    console.log('Invalid transaction status!', transaction);
    return false;
  }
  return true;
}

function processPayment(transaction) {
  if (transaction.method === TRANSACTION_METHOD_CREDIT_CARD) {
    processCreditCardPayment(transaction);
  } else if (transaction.method === TRANSACTION_METHOD_PAYPAL) {
    processPayPalPayment(transaction);
  } else if (transaction.method === TRANSACTION_METHOD_PLAN) {
    processPlanPayment(transaction);
  }
}
function processRefund(transaction) {
  if (transaction.method === TRANSACTION_METHOD_CREDIT_CARD) {
    processCreditCardRefund(transaction);
  } else if (transaction.method === TRANSACTION_METHOD_PAYPAL) {
    processPayPalRefund(transaction);
  } else if (transaction.method === TRANSACTION_METHOD_PLAN) {
    processPlanRefund(transaction);
  }
}

function isValidTransactionType(transaction) {
  const validTypes = [TRANSACTION_TYPE_PAYMENT, TRANSACTION_TYPE_REFUND];
  const validMethods = [TRANSACTION_METHOD_CREDIT_CARD, TRANSACTION_METHOD_PAYPAL, TRANSACTION_METHOD_PLAN];

  return (
    validTypes.includes(transaction.type) &&
    validMethods.includes(transaction.method)
  );
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
