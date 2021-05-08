export class Transaction {
  constructor(from, to, amount) {
    this.transaction = {
      from,
      to,
      amount
    }
  }

  getTransaction() {
    return this.transaction;
  }
}