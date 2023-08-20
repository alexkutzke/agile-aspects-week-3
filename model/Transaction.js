const PAYMENT = "PAYMENT";
const REFUND = "REFUND";
const CREDIT_CARD = "CREDIT_CARD";
const PAYPAL = "PAYPAL";
const PLAN = "PLAN"

const STATUS = ["OPEN"]
const TYPES = [PAYMENT, REFUND];
const METHODS = [CREDIT_CARD, PAYPAL, PLAN]

class Transaction {
  constructor(id, type, status, method, amount) {
    this.id = id;
    this.type = type;
    this.status = status;
    this.method = method;
    this.amount = amount;
  }

  process(){
    let message = this.buildMessage();
    console.log(message);
  }

  buildMessage() {
    if(this.isValid()){
      let formattedType = this.formatType();
      let formattedMethod = this.formatMethod();

      return `Processing ${formattedMethod} ${formattedType} for amount: ${this.amount}`;
    }
    return `Invalid transaction type!' ${JSON.stringify(this, null, 2)}`;
  }

  isValid(){
    if(TYPES.includes(this.type) && METHODS.includes(this.method) && STATUS.includes(this.status)){
      return true;
    }
    return false;
  }

  formatType(){
    if(this.type === PAYMENT){
      return "payment";
    }
    return "refund";
  }

  formatMethod(){
    if(this.method === CREDIT_CARD){
      return "credit card";
    } else if (this.method === PAYPAL){
      return "PayPal"
    }
    return "plan"
  }
}

module.exports = Transaction;