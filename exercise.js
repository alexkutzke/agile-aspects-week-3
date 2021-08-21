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
      transactionsHandler(transactions)
  }
  else {
    console.log('No transactions provided!');
  }
}


function transactionsHandler(transactions){
    for (const transaction of transactions){
	const status = isStatusOpen(transaction.status)
	const processFunction = getTransactionFunction(transaction.type, transaction.method)

	if (status && processFunction){
	    processFunction(transaction)
	}
	else{
	    console.log('Invalid transaction type!', transaction);
	}
    }
}

function isStatusOpen(status){
    let isOpen = false

    if(status==='OPEN'){
	isOpen = true
    }
    else{
	isOpen = false
    }

    return isOpen
}

function getTransactionFunction(type, method){
    const transactionsFunctions = {
	'PAYMENT': {
	    'CREDIT_CARD': processCreditCardPayment,
	    'PAYPAL': processPayPalPayment,
	    'PLAN': processPlanPayment,
	},
	'REFUND': {
	    'CREDIT_CARD': processCreditCardRefund,
	    'PAYPAL': processPayPalRefund,
	    'PLAN': processPlanRefund,
	}	
    }
    return transactionsFunctions[type][method]
}

function processCreditCardPayment(transaction) {
  console.log('Processing credit card payment for amount: ' + transaction.amount);
}

function processCreditCardRefund(transaction) {
  console.log('Processing credit card refund for amount: ' + transaction.amount);
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
