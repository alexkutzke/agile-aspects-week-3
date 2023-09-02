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
    log("No transactions provided!");
    return;
  }

  for (const transaction of transactions) {
    if (transaction.status !== "OPEN") {
      log("Invalid transaction status!", transaction);
      continue;
    }

    switch (transaction.type) {
      case "PAYMENT":
        processTransaction("Payment", transaction);
        break;
      case "REFUND":
        processTransaction("Refund", transaction);
        break;
      default:
        log("Invalid transaction type!", transaction);
        break;
    }
  }
}

function processTransaction(type, transaction) {
  switch (transaction.method) {
    case "CREDIT_CARD":
    case "PAYPAL":
    case "PLAN":
      log(
        `Processing ${type.toLowerCase()} for amount: ${transaction.amount}`,
        transaction
      );
      break;
    default:
      log("Invalid payment method!", transaction);
  }
}

function log(message, transaction) {
  console.log(`${message}:`, transaction);
}
