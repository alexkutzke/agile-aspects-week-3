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

  if(checkInsufficientInputs(transactions)) {
    reportInexistingTransaction();
  }

  const transactionProcessorList = getTransactionProcessorList(transactions);
  runTransactionProcessorList(transactions, transactionProcessorList);
}

function runTransactionProcessorList(transactions, transactionProcessorList){
  for(let i=0; i < transactions.length; i++){
    transactionProcessorList[i](transactions[i]);
  }
}

function checkInsufficientInputs(transactions){
  if (!transactions || transactions.length === 0)
  {
    return true;
  }
  return false;
}

function reportInexistingTransaction(){
  console.log('No transactions provided!');
}

function getTransactionProcessorList(transactions){
  let transactionProcessorList = [];

  for (const transaction of transactions) {
    const transactionProcessor = getSpecificTransactionProcessor(transaction);
    if(transactionProcessor) {
      transactionProcessorList.push(transactionProcessor);
    }
  }

  return transactionProcessorList;
}

function getSpecificTransactionProcessor(transaction){
  if(checkTransactionIsClosed(transaction))
  {
    return reportInvalidTransaction;
  }

  switch(transaction.type)
  {
    case "REFUND":
      return getRefundProcessor(transaction);
    case "PAYMENT":
      return getPaymentProcessor(transaction);
    default:
      return null;
  }
}

function reportInvalidTransaction(transaction){
  console.log('Invalid transaction type!', transaction);
}

function checkTransactionIsClosed(transaction)
{
  if (transaction.status == "CLOSED") {
    return true;
  }
  return false;
}

function getRefundProcessor(transaction){
  switch(transaction.method)
  {
    case "PLAN":
      return processPlanRefund;
    case "CREDIT_CARD":
      return processCreditCardRefund;
    case "PAYPAL":
      return processPayPalRefund;
    default:
      return null;
  }
}

function getPaymentProcessor(transaction){
  switch(transaction.method)
  {
    case "PLAN":
      return processPlanPayment;
    case "CREDIT_CARD":
      return processCreditCardPayment;
    case "PAYPAL":
      return processPayPalPayment;
    default:
      return null;
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
