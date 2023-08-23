main();

function main() {
  const transactions = [
    {
      id: "t1",
      type: "PAYMENT",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "23.99",
    },
    {
      id: "t2",
      type: "PAYMENT",
      status: "OPEN",
      method: "PAYPAL",
      amount: "100.43",
    },
    {
      id: "t3",
      type: "REFUND",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "10.99",
    },
    {
      id: "t4",
      type: "PAYMENT",
      status: "CLOSED",
      method: "PLAN",
      amount: "15.99",
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    console.log("No transactions provided!");
    return;
  }

  const transactionHandlers = {
    PAYMENT: {
      OPEN: {
        CREDIT_CARD: processCreditCardPayment,
        PAYPAL: processPayPalPayment,
        PLAN: processPlanPayment,
      },
    },
    REFUND: {
      OPEN: {
        CREDIT_CARD: processCreditCardRefund,
        PAYPAL: processPayPalRefund,
        PLAN: processPlanRefund,
      },
    },
  };

  transactions.forEach((transaction) => {
    const { type, status, method } = transaction;

    if (
      !(type in transactionHandlers) ||
      !(status in transactionHandlers[type]) ||
      !(method in transactionHandlers[type][status])
    ) {
      console.log("Invalid transaction type!", transaction);
      return;
    }

    const handler = transactionHandlers[type][status][method];
    handler(transaction.amount);
  });
}

function processCreditCardPayment(amount) {
  console.log("Processing credit card payment for amount: " + amount);
}

function processCreditCardRefund(amount) {
  console.log("Processing credit card refund for amount: " + amount);
}

function processPayPalPayment(amount) {
  console.log("Processing PayPal payment for amount: " + amount);
}

function processPayPalRefund(amount) {
  console.log("Processing PayPal refund for amount: " + amount);
}

function processPlanPayment(amount) {
  console.log("Processing plan payment for amount: " + amount);
}

function processPlanRefund(amount) {
  console.log("Processing plan refund for amount: " + amount);
}
