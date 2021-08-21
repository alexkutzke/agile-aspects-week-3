getTransactions();

function getTransactions() {
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
    testTransacitonsLenght(transactions)
    transactions.forEach(processPaymentStatus);
}

function testTransacitonsLenght(transactions){
  if (transactions.length <= 0 || !transactions) {
  console.log('No transactions provided!');
  }
}

function processPaymentStatus(transaction){

      if (transaction.status === 'OPEN') {
          processPaymentType(transaction)
      } 
        
      else {
          invalidTransactionType(transaction)
        }
       
}

function processPaymentType(transaction){

      if (transaction.type === 'PAYMENT') {
          processPaymentMethod(transaction)
      } 

      else if (transaction.type === 'REFUND') {
          processRefundMethod(transaction)
      } 
        
      else {
          invalidTransactionType(transaction)
        }
       
}

function processPaymentMethod(transaction){

    if (transaction.method === 'CREDIT_CARD') {
            processCreditCardPayment(transaction);
          } 

    else if (transaction.method === 'PAYPAL') {
            processPayPalPayment(transaction);
          } 

    else if (transaction.method === 'PLAN') {
            processPlanPayment(transaction);
          }

    else {
          invalidTransactionType(transaction)
        }
       
}

function processRefundMethod(transaction){

    if (transaction.method === 'CREDIT_CARD') {
      processCreditCardRefund(transaction);
    } 

    else if (transaction.method === 'PAYPAL') {
      processPayPalRefund(transaction);
    } 

    else if (transaction.method === 'PLAN') {
      processPlanRefund(transaction);
    }

    else {
          invalidTransactionType(transaction)
        }
       
}

function invalidTransactionType(transaction){
  console.log('Invalid transaction type!', transaction)
}

function processCreditCardPayment(transaction) {
  console.log(`Processing credit card payment for amount: US$ ${transaction.amount}`);
}

function processCreditCardRefund(transaction) {
  console.log(`Processing credit card refund for amount: US$ ${transaction.amount}`);
}

function processPayPalPayment(transaction) {
  console.log(`Processing PayPal payment for amount: US$ ${transaction.amount}`);
}

function processPayPalRefund(transaction) {
  console.log(`Processing PayPal refund for amount: US$ ${transaction.amount}`);
}

function processPlanPayment(transaction) {
  console.log(`Processing plan payment for amount: US$ ${transaction.amount}`);
}

function processPlanRefund(transaction) {
  console.log(`Processing plan refund for amount: US$ ${transaction.amount}`);
}
