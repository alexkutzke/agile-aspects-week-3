main();

function main() {
  const transactionsToProcess = getTransactionsFromQueue();
  processTransactions(transactionsToProcess);
}

function processTransactions(transactions) {
  const ERROR_MSG_NO_TRANSACTIONS_PROVIDED = "No transactions provided!";

  if(isProvidedTransactions(transactions))
    for (const transaction of transactions){
      if(isValidTransaction(transaction))
        processTransactionPayment(transaction);  
    }
  else
    console.log(ERROR_MSG_NO_TRANSACTIONS_PROVIDED);
}

function isProvidedTransactions(transactions) {
  return transactions && transactions.length > 0;
}

function isValidTransaction(transaction) {
  let isTransactionOk = true;

  try{
    checkTransactionStatus(transaction.status);
    checkTransactionType(transaction.type);
    checkTransactionMethod(transaction.method);
  } catch(error){
      isTransactionOk = false;
      console.log(`Transaction ID: ${transaction.id} - ${error}`);
  } finally {
      return isTransactionOk;
  }
}

function checkTransactionStatus(status){
  const ERROR_MSG_INVALID_TRANSACTION_STATUS = "Invalid transaction status!";
  const VALID_TRANSACTION_STATUS = ["OPEN"];

  if(!VALID_TRANSACTION_STATUS.includes(status))
    throw new Error(ERROR_MSG_INVALID_TRANSACTION_STATUS);
}

function checkTransactionType(type){
  const ERROR_MSG_INVALID_TRANSACTION_TYPE = "Invalid transaction type!";
  const VALID_TRANSACTION_TYPES = ["PAYMENT", "REFUND"];

  if(!VALID_TRANSACTION_TYPES.includes(type))
    throw new Error(ERROR_MSG_INVALID_TRANSACTION_TYPE);
}

function checkTransactionMethod(method){
  const ERROR_MSG_INVALID_TRANSACTION_METHOD = "Invalid transaction method!";
  const VALID_TRANSACTION_METHODS = ["CREDIT_CARD", "PAYPAL", "PLAN"];

  if(!VALID_TRANSACTION_METHODS.includes(method))
    throw new Error(ERROR_MSG_INVALID_TRANSACTION_METHOD);
}

function processTransactionPayment(transaction){  
  console.log(
    `Processing a ${formatOutputMessageData(transaction.method)} ${formatOutputMessageData(transaction.type)} for amount: ${transaction.amount}`
  );
}

function formatOutputMessageData(valueToFormat){
  return (valueToFormat.includes("_") ? valueToFormat.replace("_", " ") : valueToFormat).toLowerCase();
}

function getTransactionsFromQueue(){
  return [
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
}