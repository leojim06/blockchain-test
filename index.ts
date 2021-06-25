import util from 'util';
import chalk from 'chalk';
import Block from "./blockchange/block";
import BlockChain from "./blockchange/blockchain";

let block1 = new Block({ from: "Joe", to: "Jane" })
let block2 = new Block({ from: "Jane", to: "Carl" })

let chain = new BlockChain()
chain.addNewBlock(block1)
chain.addNewBlock(block2)

console.log(chalk.italic.magentaBright('Validity:'), `${chain.checkChainValidity()}`)
console.log(chalk.italic.magentaBright('Last block:'), `${util.inspect(chain.obtainLastesBlock(), false, null, true)}`)
console.log(chalk.italic.magentaBright('Blockchain:'), `${util.inspect(chain.obtainBlockChain(), false, null, true)}`)