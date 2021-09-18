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
  try {
    if (transactions && transactions.length === 0) {
      throw new Error("No transactions provided");
    }

    for (const transaction of transactions) {
      if (transaction.status !== "OPEN") {
        console.log("Invalid transaction type!", transaction);
        continue;
      }

      if (transaction.type === "PAYMENT") {
        processTransactionTypePayment(transaction);
      } else if (transaction.type === "REFUND") {
        processTransactionTypeRefund(transaction);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

function processTransactionTypePayment(transaction) {
  switch (transaction.method) {
    case "CREDIT_CARD":
      console.log(
        "Processing credit card payment for amount: " + transaction.amount
      );
      break;
    case "PAYPAL":
      console.log(
        "Processing PayPal payment for amount: " + transaction.amount
      );
      break;
    case "PLAN":
      console.log("Processing plan payment for amount: " + transaction.amount);
      break;

    default:
      break;
  }
}

function processTransactionTypeRefund(transaction) {
  switch (transaction.method) {
    case "CREDIT_CARD":
      console.log(
        "Processing credit card refund for amount: " + transaction.amount
      );
      break;
    case "PAYPAL":
      console.log("Processing PayPal refund for amount: " + transaction.amount);
      break;
    case "PLAN":
      console.log("Processing plan refund for amount: " + transaction.amount);
      break;

    default:
      break;
  }
}
