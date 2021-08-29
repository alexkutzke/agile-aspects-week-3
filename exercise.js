import TransactionMethodFactory from './services/transactionMethodFactory'
import TransactionStatus from './transcationEnums/transactionStatus.js'
import TransactionType from './transcationEnums/transactionType.js'
import Transaction from './models/transacion.js'

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

  processTransactions(transactions.map(transaction => new Transaction(transaction)));
}

function processTransactions(transactions) {
  if (!transactions || transactions.length <= 0) {
    throw new Error("No transactions provided");
  }

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function processTransaction(transaction) {
  if (transaction.status !== TransactionStatus.OPEN) {
    throw new Error("Transaction is not open");
  }

  const process = new TransactionMethodFactory(transaction).execute();

  if (transaction.type === TransactionType.PAYMENT) {
    process.processPayment(transaction);
  }

  if (transaction.type === TransactionType.REFUND) {
    process.processRefund(transaction);
  }
}


main();