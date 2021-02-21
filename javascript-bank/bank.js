/* exported Bank */

class Bank {
  constructor() {
    this.nextAccountNumber = 1;
    this.accounts = [];
    this.openAccount = this.openAccount.bind(this);
    this.getAccount = this.getAccount.bind(this);
    this.getTotalAssets = this.getTotalAssets.bind(this);
  }

  openAccount(holder, balance) {
    if (balance > 0 && Number.isInteger(balance)) {
      const account = new Account(this.nextAccountNumber, holder);

      account.deposit(balance);
      this.accounts.push(account);
      this.nextAccountNumber++;
      return account.number;
    } else {
      return null;
    }
  }

  getAccount(number) {
    const foundAccount = this.accounts.find(account => account.number === number);
    if (!foundAccount) {
      return null;
    }
    return foundAccount;
  }

  getTotalAssets() {
    const reducer = (sum, account) => {
      return sum + account.getBalance();
    };
    return this.accounts.reduce(reducer, 0);
  }
}
