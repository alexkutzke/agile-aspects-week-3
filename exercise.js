// Cauê Veiga e Aruake Mourão
//
// Função principal que inicia o processamento das transações
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

// Função para processar todas as transações
function processTransactions(transactions) {
  // Verifica se há transações para processar
  if (transactions.length === 0) {
    console.log('No transactions provided!');
    return;
  }

  // Processa cada transação individualmente
  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

// Função para processar uma única transação
function processTransaction(transaction) {
  if (isValidTransaction(transaction)) {
    if (transaction.type === 'PAYMENT') {
      // Processa pagamento
      processPayment(transaction);
    } else if (transaction.type === 'REFUND') {
      // Processa reembolso
      processRefund(transaction);
    } else {
      console.log('Invalid transaction type!', transaction);
    }
  } else {
    console.log('Invalid transaction type!', transaction);
  }
}

// Função para verificar se a transação é válida
function isValidTransaction(transaction) {
  return transaction.type === 'PAYMENT' || transaction.type === 'REFUND';
}

// Função para processar transações de pagamento
function processPayment(transaction) {
  const paymentMethodProcessors = {
    'CREDIT_CARD': processCreditCardPayment,
    'PAYPAL': processPayPalPayment,
    'PLAN': processPlanPayment,
  };

  // Verifica se há um processador válido para o método de pagamento
  if (paymentMethodProcessors.hasOwnProperty(transaction.method)) {
    const paymentProcessor = paymentMethodProcessors[transaction.method];
    paymentProcessor(transaction);
  } else {
    console.log('Invalid payment method!', transaction);
  }
}

// Função para processar transações de reembolso
function processRefund(transaction) {
  const refundMethodProcessors = {
    'CREDIT_CARD': processCreditCardRefund,
    'PAYPAL': processPayPalRefund,
    'PLAN': processPlanRefund,
  };

  // Verifica se há um processador válido para o método de reembolso
  if (refundMethodProcessors.hasOwnProperty(transaction.method)) {
    const refundProcessor = refundMethodProcessors[transaction.method];
    refundProcessor(transaction);
  } else {
    console.log('Invalid refund method!', transaction);
  }
}

// Funções de processamento específicas para cada método de pagamento
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

main();
