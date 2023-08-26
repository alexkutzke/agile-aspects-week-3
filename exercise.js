main();

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

function TypeTransaction(transaction){
    const defineType = type =>{
        const types = {
            PAYMENT: 'payment',
            REFUND: 'refund'
        }
        return types[type] != undefined ? `${types[type]} for amount:` : false
    }

    return defineType(transaction.type)
}

function methodTransaction(transaction){
    const defyneMethod = method =>{
        const methods = {
            CREDIT_CARD: 'credit card',
            PAYPAL: 'paypal',
            PLAN:'plan'
        }
        return methods[method] != undefined ? `Processing PayPal ${methods[method]}` : false
    }

    return defyneMethod(transaction.method)
}

function haveTransactions(transactions){
    return transactions && transactions.length > 0
}

function isOpen(transaction){
    return transaction.status === 'OPEN'
}

function transactionValid(transaction){
    return methodTransaction(transaction) && (TypeTransaction(transaction) && isOpen(transaction))
}

function messageInfo(transaction){
    return methodTransaction(transaction) + (TypeTransaction(transaction)) + transaction.amount
}

function messageNotValid(transaction){
    return 'Invalid transaction type!' + JSON.stringify(transaction)
}

function messageAllValid(transaction){
    return transactionValid(transaction) ? (messageInfo(transaction)) : (messageNotValid(transaction))
}

function processTransactions(transactions){

    for (const transaction of transactions) {
       console.log(messageAllValid(transaction))
    }

    return !haveTransactions(transactions) ? console.log('No transactions provided!') : ''
}
