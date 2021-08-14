main();

function main() {
  transactions = list();

  if (transactions && transactions.length > 0) {
    transactionType(transactions);
  } else {
    console.log('No transactions provided!');
  }
}

function transactionType(transactions) {
    for (const transaction of transactions) {
        if (transaction.status === 'OPEN') {
            returnTransaction(transaction)
        } else {
          console.log('Invalid transaction type!', transaction);
        }
      }
}

function returnTransaction(transaction) {
   console.log(
    'Processing '+ OrganizeStringForReturn(transaction.method)  + ' ' + transaction.type + ' for amount: ' + transaction.amount
  );
}

function OrganizeStringForReturn(text){
    text = text.replace("_", " ");
    return text.toLowerCase().split(' ').map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ')
}

function list() {
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
  return transactions;
}