executeTransactions()

function getTransactionList () {
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
  return transactions
}

function transactionIsValid (transactions) {
    if (transactions && transactions.length > 0){
        return true
    } else {
        console.log('No transactions provided!')
        return false
    }
}

function printTransactionInfo (transaction) {
    console.log(`Processing ${transaction.method} ${transaction.type} for amount: ${transaction.amount}`)
}

function generateTransactionMethodArray () {
  return [
    'CREDIT_CARD',
    'PAYPAL',
    'PLAN'
  ]
}

function checkTransactionMethodAndStatus (transaction) {
  const transactionTypes = generateTransactionMethodArray ()
  if ((transaction.status === 'OPEN') && (transactionTypes.includes(transaction.method))) {
    return true
  } else {
    return false
  }
}

function printInvalidTransactionMessage (transaction) {
  console.log('Invalid transaction type!', transaction);
}

function processTransactionIfOpen (transaction) {
  if (checkTransactionMethodAndStatus (transaction)) {
    printTransactionInfo(transaction);
  } else {
    printInvalidTransactionMessage (transaction);
  }
}

function processTransactions(transactions) {
  if (transactionIsValid(transactions)) {
    for (const transaction of transactions) {
      processTransactionIfOpen(transaction);
    }
  }
}

function executeTransactions () {
    processTransactions(getTransactionList ());
}
