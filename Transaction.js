class Transaction {
    constructor({ id, type, status, method, amount }) {
      this.id = id;
      this.type = type;
      this.status = status;
      this.method = method;
      this.amount = amount;
    }
  }
  
  module.exports = Transaction;
  