class Block {
  constructor(index, timestamp, transaction, previousBlockHash) {
    this.block = {
      index,
      timestamp,
      previousBlockHash,
      nonce: 0,
      transaction: transaction.getTransaction(),
    }
    this.block.hash = this.generateHash()
  }

  getBlock() {
    return this.block;
  }

  generateHash() {
    return sha256(Object.keys(this.block).map(k => this.block[k]).join('')).toString();
  }

  checkProofOfWork(difficulty) {
    const zeroFromHash = this.block.hash.slice(0, difficulty);
    const zeroFromDifficulty = Array(difficulty + 1).join('0');

    return zeroFromHash !== zeroFromDifficulty;
  }

  proofOfWork(difficulty) {
    while (this.checkProofOfWork(difficulty)) {
      this.block.nonce++;
      this.block.hash = this.generateHash();
    }
  }
}