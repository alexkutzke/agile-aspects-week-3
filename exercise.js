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

    if(checkTransactionsArray(transactions)){
        processTransactions(transactions);
    }
}

function checkTransactionsArray(transactions){
    if(transactions && transactions.length > 0){
        return true;
    }else{
        console.log('No transactions provided!');
    }
}

function processTransactions(transactions) {
    for (const transaction of transactions) {
        printTransaction(transaction);
    }
}

function printTransaction (transaction){
    if(checkValidTransaction(transaction)) {
        console.log('Invalid transaction type!', transaction);
    }  else if (transaction.type === 'PAYMENT') {
        processPaymentMethods(transaction)
    } else if (transaction.type === 'REFUND') {
        processRefundMethods(transaction)
    } 
}

function checkValidTransaction(transaction){
    return transaction.type !== 'PAYMENT' && transaction.type !== 'REFUND' || transaction.status !== 'OPEN';
 }
 
 function processPaymentMethods (transaction){
     switch(transaction.method) {
         case 'CREDIT_CARD':
             processCreditCardPayment(transaction);
             break
         case 'PAYPAL':
             processPayPalPayment(transaction);
             break
         case 'PLAN':
             processPlanPayment(transaction);
             break
     }
 }
 
 function processRefundMethods (transaction){
     switch(transaction.method) {
         case 'CREDIT_CARD':
             processCreditCardRefund(transaction);
             break
         case 'PAYPAL':
             processPayPalRefund(transaction);
             break
         case 'PLAN':
             processPlanRefund(transaction);
             break
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

