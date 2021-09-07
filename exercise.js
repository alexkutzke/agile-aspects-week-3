main();

function main() {
  const TRANSACTIONS = [
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

  processTransactions(TRANSACTIONS);
}

function processTransactions(transactions) {
  isAValidTransactions(transactions);

  transactions.map((transaction) => {
    if (checkStatusTransactionIsOpen(transaction)) {
      runTransaction(transaction);
    }
  });
}

function runTransaction(transaction) {
  switch (transaction.method) {
    case "CREDIT_CARD":
      return creditCardMethod()[transaction.type](transaction);
    case "PAYPAL":
      return payPalMethod()[transaction.type](transaction);
    case "PLAN":
      return planMethod()[transaction.type](transaction);
    default:
      throw new Error("No transactions provided!");
      break;
  }
}

function creditCardMethod(transaction) {
  return {
    PAYMENT: (transaction) =>
      console.log(
        "Processing credit card payment for amount: " + transaction.amount
      ),
    REFUND: (transaction) =>
      console.log(
        "Processing credit card refund for amount: " + transaction.amount
      ),
  };
}

function payPalMethod(transaction) {
  return {
    PAYMENT: (transaction) =>
      console.log(
        "Processing PayPal  payment for amount: " + transaction.amount
      ),
    REFUND: (transaction) =>
      console.log("Processing PayPal refund for amount: " + transaction.amount),
  };
}

function planMethod(transaction) {
  return {
    PAYMENT: (transaction) =>
      console.log("Processing plan payment for amount: " + transaction.amount),
    REFUND: (transaction) =>
      console.log("Processing plan refund for amount: " + transaction.amount),
  };
}

function checkStatusTransactionIsOpen(transaction) {
  if (transaction.status === "OPEN") {
    return true;
  }
  console.error("Invalid transaction type!", transaction);
  return;
}

function isAValidTransactions(transaction) {
  if (!transaction || transaction.length === 0) {
    throw new Error("No transactions provided!");
  }
}
