const sha256 = require("crypto-js/sha256");
const Blockchain = require('./src/blockchain');
const Block = require('./src/block');
const Transaction = require('./src/transaction');


(() => {
  const myBlockChain = new Blockchain();
  myBlockChain.setDifficulty(4);
  
  myBlockChain.addNewBlock(new Block(myBlockChain.getTotalBlock().length, new Date(), new Transaction('0x111', '0x222', 10)));
  myBlockChain.addNewBlock(new Block(myBlockChain.getTotalBlock().length, new Date(), new Transaction('0x444', '0x555', 30)));
  myBlockChain.addNewBlock(new Block(myBlockChain.getTotalBlock().length, new Date(), new Transaction('0x888', '0x111', 40)));

  console.log(`Your entire blockchain: ${JSON.stringify(myBlockChain, null, 4)}`)
})();
