/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    const account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  const foundAccount = this.accounts.find(account => account.number === number);
  if (!foundAccount) {
    return null;
  }
  return foundAccount;
};

Bank.prototype.getTotalAssets = function () {
  const reducer = (sum, account) => {
    return sum + account.getBalance();
  };
  return this.accounts.reduce(reducer, 0);
};
