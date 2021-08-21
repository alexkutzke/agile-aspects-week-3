const ProcessMethodFactory = require("./ProcessMethodFactory");
const TransactionStatusEnum = require("./TransactionStatusEnum");
const TransactionTypeEnum = require("./TransactionTypeEnum");
const Transaction = require("./Transaction");

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

  processTransactions(transactions.map((t) => new Transaction(t)));
}

function checkIsEmptyTransactions(transactions) {
  return transactions && Array.isArray(transactions) && transactions.length > 0;
}

function isTransactionOpen(status) {
  return TransactionStatusEnum.OPEN === status;
}

function isTransactionPayment(type) {
  return TransactionTypeEnum.PAYMENT === type;
}

function processTransaction(transaction) {
  if (isTransactionOpen(transaction.status)) {
    const process = new ProcessMethodFactory(transaction).build();

    if (isTransactionPayment(transaction.type)) {
      process.processPayment(transaction);
    } else {
      process.processRefund(transaction);
    }
  } else {
    console.log("Invalid transaction type!", transaction);
  }
}

function processTransactions(transactions) {
  if (!checkIsEmptyTransactions()) {
    for (const transaction of transactions) {
      processTransaction(transaction);
    }
  }
}
