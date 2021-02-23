/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    const transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    const transaction = new Transaction('withdraw', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  let balance = 0;
  this.transactions.forEach(transaction => {
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else if (transaction.type === 'withdraw') {
      balance -= transaction.amount;
    }
  });
  return balance;
};
