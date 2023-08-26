main();

function main() {
  const listTransactions = [
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

  processTransactions(listTransactions);
}

function processTransactions(listTransactions) {
  if (!listTransactions || listTransactions.length == 0) {
    console.log('No transactions provided!');
    return;
  }

  for (const itemTransactions of listTransactions) {
    if (itemTransactions.type == 'PAYMENT') {
      if (itemTransactions.status != 'OPEN') {
        console.log('Invalid transaction type!', itemTransactions);
        return;
      }

      switch (itemTransactions.method) {
        case 'CREDIT_CARD':
          processCreditCardPayment(itemTransactions);
          break;
        case 'PAYPAL':
          processPayPalPayment(itemTransactions);
          break;
        case 'PLAN':
          processPlanPayment(itemTransactions);
          break;
        default:
          console.log('Invalid transaction method!', itemTransactions);
      }

    } else if (itemTransactions.type == 'REFUND') {
      if (itemTransactions.status != 'OPEN') {
        console.log('Invalid transaction status!', itemTransactions);
        return;
      }
      switch (itemTransactions.method) {
        case 'CREDIT_CARD':
          processRefundByCreditCard(itemTransactions);
          break;
        case 'PAYPAL':
          processRefundByPayPal(itemTransactions);
          break;
        case 'PLAN':
          processPlanRefund(itemTransactions);
          break;
        default:
          console.log('Invalid refund method!', itemTransactions);
      }
    } else {
      console.log('Invalid transaction type!', itemTransactions);
    }
  }


}

function processCreditCardPayment(itemTransactions) {
  console.log('Processing credit card payment for amount: ' + itemTransactions.amount);
}

function processCreditCardRefund(itemTransactions) {
  console.log('Processing credit card refund for amount: ' + itemTransactions.amount);
}

function processPayPalPayment(itemTransactions) {
  console.log('Processing PayPal payment for amount: ' + itemTransactions.amount);
}

function processPayPalRefund(itemTransactions) {
  console.log('Processing PayPal refund for amount: ' + itemTransactions.amount);
}

function processPlanPayment(itemTransactions) {
  console.log('Processing plan payment for amount: ' + itemTransactions.amount);
}

function processPlanRefund(itemTransactions) {
  console.log('Processing plan refund for amount: ' + itemTransactions.amount);
}
