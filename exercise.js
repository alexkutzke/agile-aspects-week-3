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
  if (transactions && transactions.length > 0) {
    for (const transaction of transactions) {
      if (transaction.type === 'PAYMENT') {
        if (transaction.status === 'OPEN') {
          tpPagamento(transaction);
        } else {
          console.log('Invalid transaction type!', transaction);
        }
      } else if (transaction.type === 'REFUND') {
        if (transaction.status === 'OPEN') {
          tpPagamento(transaction);
        } else {
          console.log('Invalid transaction type!', transaction);
        }
      } else {
        console.log('Invalid transaction type!', transaction);
      }
    }
  } else {
    console.log('No transactions provided!');
  }
}

function tpPagamento(transaction){
  var msg = '';
  switch (transaction.method) {
    case 'CREDIT_CARD':
      msg = 'Processing credit card payment for amount:'
      processCreditCardPayment(msg , transaction);
    case 'PAYPAL':
      msg = 'Processing PayPal payment for amount: '
      processPayPalPayment(transaction);
    case 'PLAN':
      msg = 'Processing plan payment for amount: '
      processPlanPayment(transaction);
    default:
  }
}

function processCreditCardPayment(msg , transaction) {
  console.log(
    msg + transaction.amount
  );
}