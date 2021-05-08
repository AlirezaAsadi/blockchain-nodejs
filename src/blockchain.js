class Blockchain {
  constructor() {
    const initialBlock = new Block(0, new Date(), new Transaction('0x0', '0x0', 0), '-');
    this.blockchain = [initialBlock];
    this.difficulty = 0;
  }

  setDifficulty(difficulty) {
    this.difficulty = difficulty;
  }

  getLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  getTotalBlock() {
    return this.blockchain.length;
  }

  addNewBlock(block) {
    console.log(`Adding new block: ${JSON.stringify(block.getBlock().transaction)}`);
    block.previousBlockHash = this.getLatestBlock().hash;
    console.log(`Mining block...`);
    block.proofOfWork(this.difficulty);
    this.blockchain.push(block);
    console.log(`Mining completed with nonce "${block.getBlock().nonce}", new block added to blockchain.\n\n`);
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const previousBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.generateHash()) return false;
      if (currentBlock.previousBlockHash !== previousBlock.hash) return false;
    }
    return true;
  }
}