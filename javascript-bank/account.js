/* exported Account */
class Account {
  constructor(number, holder) {
    this.number = number;
    this.holder = holder;
    this.transactions = [];
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.getBalance = this.getBalance.bind(this);
  }

  deposit(amount) {
    const transaction = new Transaction('deposit', amount);

    if (amount > 0 && Number.isInteger(amount)) {
      this.transactions.push(transaction);
      return true;
    } else {
      return false;
    }
  }

  withdraw(amount) {
    const transaction = new Transaction('withdraw', amount);

    if (amount > 0 && Number.isInteger(amount)) {
      this.transactions.push(transaction);
      return true;
    } else {
      return false;
    }
  }

  getBalance() {
    let balance = 0;
    this.transactions.forEach(transaction => {
      if (transaction.type === 'deposit') {
        balance += transaction.amount;
      } else if (transaction.type === 'withdraw') {
        balance -= transaction.amount;
      }
    });
    return balance;
  }
}
